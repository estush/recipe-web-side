using System;
using System.Collections.Generic;

namespace DTO.Classes;

public class CommentsToRecipe
{
    public int Id { get; set; }

    public int RecipeId { get; set; }

    public int UserId { get; set; }

    public string? UserName { get; set; } = null;

    public string? Comment { get; set; }

}
