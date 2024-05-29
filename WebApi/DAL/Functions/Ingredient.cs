using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class IngredientDal : IIngredientDal
{
    RecipesDbContext db;
    public IngredientDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public List<Ingredient> Add(Ingredient ingredient)
    {
        try
        {
            db.Ingredients.Add(ingredient);
            db.SaveChanges();
            return db.Ingredients.ToList();
        }
        catch
        {
            return null;
        }
    }

    public List<Ingredient> GetAll()
    {
        return db.Ingredients.ToList();
    }

}
