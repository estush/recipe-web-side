using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface IIngredientDal
{
    List<Ingredient> GetAll();
    List<Ingredient> Add(Ingredient ingredient);

}
