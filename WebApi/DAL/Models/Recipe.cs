using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Recipe
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Pic { get; set; }

    public string? PreparationTime { get; set; }

    public int UserId { get; set; }

    public int CategoryId { get; set; }

    public int LevelId { get; set; }

    public string? Note { get; set; }

    public string? Instructions { get; set; }

    public virtual Category Category { get; set; } = null!;

    public virtual ICollection<CommentsToRecipe> CommentsToRecipes { get; set; } = new List<CommentsToRecipe>();

    public virtual ICollection<IngredientsToRecipe> IngredientsToRecipes { get; set; } = new List<IngredientsToRecipe>();

    public virtual Level Level { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
