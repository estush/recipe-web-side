using System;
using System.Collections.Generic;

namespace DAL.Models;

public partial class CommentsToRecipe
{
    public int Id { get; set; }

    public int RecipeId { get; set; }

    public int UserId { get; set; }

    public string? Comment { get; set; }

    public virtual Recipe Recipe { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
