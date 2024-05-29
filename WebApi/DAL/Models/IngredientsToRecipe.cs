using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class IngredientsToRecipe
{
    public int Id { get; set; }

    public int RecipeId { get; set; }

    public int IngredientId { get; set; }

    public string? Amount { get; set; }

    public virtual Ingredient Ingredient { get; set; } = null!;

    public virtual Recipe Recipe { get; set; } = null!;
}
