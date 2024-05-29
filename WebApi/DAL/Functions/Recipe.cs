using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class RecipeDal : IRecipeDal
{
    RecipesDbContext db;

    public RecipeDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public int Add(Recipe recipe)
    {
        try
        {
            db.Recipes.Add(recipe);
            db.SaveChanges();
            Recipe newRecipe = db.Recipes.FirstOrDefault(r => r.Name == recipe.Name && r.UserId == recipe.UserId && r.CategoryId == recipe.CategoryId && r.LevelId == recipe.LevelId);
            if(newRecipe != null)
            {
                return newRecipe.Id;
            }
            else
            {
                return -1;
            }
        }
        catch
        {
            return -1;
        }
    }

    public List<Recipe> GetAll()
    {
        List<Recipe> list = db.Recipes.ToList();
        foreach (var recipe in list)
        {
            recipe.Category = db.Categories.FirstOrDefault(c => c.Id == recipe.CategoryId);
            recipe.Level = db.Levels.FirstOrDefault(l => l.Id == recipe.LevelId);
            recipe.User = db.Users.FirstOrDefault(u => u.Id == recipe.UserId);
            recipe.IngredientsToRecipes = db.IngredientsToRecipes.Where(i => i.RecipeId == recipe.Id).ToList();
        }
        return list;
    }
}
