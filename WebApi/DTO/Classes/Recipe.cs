using System;
using System.Collections.Generic;

namespace DTO.Classes;

public class Recipe
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Pic { get; set; }

    public string? PreparationTime { get; set; }

    public int UserId { get; set; }

    public string? UserName { get; set; } = null;

    public int CategoryId { get; set; }

    public string? CategoryName { get; set; } = null;

    public int LevelId { get; set; }

    public string? LevelName { get; set; } = null;

    public string? Note { get; set; }

    public string? Instructions { get; set; }

    //public List<IngredientsToRecipe> IngredientsToRecipe { get; set; } = new List<IngredientsToRecipe>();

}
