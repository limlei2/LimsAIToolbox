package dev.limlei2.limsToolbox.recipe;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class RecipeGeneratorService {
    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public RecipeGeneratorService(WebClient.Builder webClientBuilder){
        this.webClient = webClientBuilder.build();
    }

    public String generateRecipeReply(RecipeRequest recipeRequest){
        //Build a Prompt
        String prompt = buildPrompt(recipeRequest);

        //Craft a Request
        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of("parts", new Object[]{
                                Map.of("text", prompt)
                        })
                }
        );

        //Get a Response
        String response = webClient.post()
                .uri(geminiApiUrl + geminiApiKey)
                .header("Content-Type", "application/json")
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        //Extract Response and Return
        return extractResponseContent(response);
    }

    private String extractResponseContent(String response){
        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode rootNode = mapper.readTree(response);
            return rootNode.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();
        } catch (Exception e) {
            return "Error: " + e.getMessage();
        }
    }

    private String buildPrompt(RecipeRequest recipeRequest){
        StringBuilder prompt = new StringBuilder();
        prompt.append("Generate a recipe using the following ingredients: ");
        prompt.append(recipeRequest.getIngredients()).append(". ");
        prompt.append("Use a time constraint of ").append(recipeRequest.getTime()).append(" minutes.");
        prompt.append("Use a difficulty level of ").append(recipeRequest.getDifficulty()).append(".");
        return prompt.toString();
    }
}
