using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class CommentsToRecipeDal : ICommentsToRecipeDal
{
    RecipesDbContext db;
    public CommentsToRecipeDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public bool AddToRecipe(CommentsToRecipe comment)
    {
        try
        {
            db.CommentsToRecipes.Add(comment);
            db.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
    }

    public List<CommentsToRecipe> GetByRecipeId(int recipeId)
    {
        List<CommentsToRecipe> list = db.CommentsToRecipes.Where(c => c.RecipeId == recipeId).ToList();
        foreach (var comment in list)
        {
            comment.User = db.Users.FirstOrDefault(u => u.Id == comment.UserId);
        }
        return list;
    }
}
