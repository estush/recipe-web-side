using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class LevelDal:ILevelDal 
{
    RecipesDbContext db;
    public LevelDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public List<Level> Add(Level level)
    {
        try
        {
            db.Levels.Add(level);
            db.SaveChanges();
            return db.Levels.ToList();
        }
        catch
        {
            return null;
        }
    }

    public List<Level> GetAll()
    {
        return db.Levels.ToList();
    }

}
