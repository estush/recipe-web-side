using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class User
{
    public int Id { get; set; }

    public string LastName { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public virtual ICollection<CommentsToRecipe> CommentsToRecipes { get; set; } = new List<CommentsToRecipe>();

    public virtual ICollection<Recipe> Recipes { get; set; } = new List<Recipe>();
}
