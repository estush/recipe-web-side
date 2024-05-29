using System;
using System.Collections.Generic;

namespace DTO.Classes;

public class IngredientsToRecipe
{
    public int Id { get; set; }

    public int RecipeId { get; set; }

    public int IngredientId { get; set; }

    public string? IngredientName { get; set; } = null;

    public string? Amount { get; set; }

}
