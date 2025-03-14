package dev.limlei2.limsToolbox.resume;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Map;

@Service
public class ResumeService {

    private final WebClient webClient;

    @Value("${gemini.api.url}")
    private String geminiApiUrl;
    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public ResumeService(WebClient.Builder webClientBuilder){
        this.webClient = webClientBuilder.build();
    }

    public String generateResume(String resume){
        String prompt = buildPrompt(resume);

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

    private String buildPrompt(String resume){
        StringBuilder prompt = new StringBuilder();
        prompt.append("Give tips on how to improve this resume\n").append(resume);
        prompt.append("\nFor the resume, suggest changes to better highlight my technical skills, projects and achievements in a way that stands out to recruiters\n" +
                "give examples of rephrasing or restructuring sentences to make them more impactful\n" +
                "provide possible steps or projects to work on in the future to improve my resume");
        prompt.append("Do not point out any typos in the resume. Instead, focus on the content of the resume.");
        prompt.append("Do not style any words in the reply. Leave them as plain text. Do not use **bold** or _italic_ formatting.");
        return prompt.toString();
    }

}
