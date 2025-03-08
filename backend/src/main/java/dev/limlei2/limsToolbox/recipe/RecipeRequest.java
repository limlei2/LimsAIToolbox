package dev.limlei2.limsToolbox.recipe;

import lombok.Data;

@Data
public class RecipeRequest {
    private String ingredients;
    private String time;
    private String difficulty;
}
