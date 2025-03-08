package dev.limlei2.limsToolbox.recipe;

import dev.limlei2.limsToolbox.email.EmailGeneratorService;
import dev.limlei2.limsToolbox.email.EmailRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipe")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class RecipeGeneratorController {


    private final RecipeGeneratorService recipeGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody RecipeRequest recipeRequest){
        String response = recipeGeneratorService.generateRecipeReply(recipeRequest);
        return ResponseEntity.ok(response);
    }
}
