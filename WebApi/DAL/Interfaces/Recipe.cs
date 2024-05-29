using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface IRecipeDal
{
    List<Recipe> GetAll();
    int Add(Recipe recipe);

}
