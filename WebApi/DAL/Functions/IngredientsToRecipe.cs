using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class IngredientsToRecipeDal : IIngredientsToRecipeDal
{
    RecipesDbContext db;

    public IngredientsToRecipeDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public bool AddToRecipe(List<IngredientsToRecipe> ingredients)
    {
        try
        {
            foreach (IngredientsToRecipe i in ingredients)
            {
                db.IngredientsToRecipes.Add(i);
            }
            db.SaveChanges();
            return true;
        }
        catch
        {
            return false;
        }
    }

    public List<IngredientsToRecipe> GetByRecipeId(int recipeId)
    {
        List<IngredientsToRecipe> list = db.IngredientsToRecipes.Where(c => c.RecipeId == recipeId).ToList();
        foreach (var ingredient in list)
        {
            ingredient.Ingredient = db.Ingredients.FirstOrDefault(i => i.Id == ingredient.IngredientId);
        }
        return list;
    }
}
