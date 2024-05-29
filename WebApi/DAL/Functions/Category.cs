using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class CategoryDal : ICategoryDal
{

    RecipesDbContext db;
    public CategoryDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public List<Category> Add(Category category)
    {
        try
        {
            db.Categories.Add(category);
            db.SaveChanges();
            return db.Categories.ToList();
        }
        catch
        {
            return null;
        }
    }

    public List<Category> GetAll()
    {
        return db.Categories.ToList();
    }
}
