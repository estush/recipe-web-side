using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class Ingredient
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<IngredientsToRecipe> IngredientsToRecipes { get; set; } = new List<IngredientsToRecipe>();
}
