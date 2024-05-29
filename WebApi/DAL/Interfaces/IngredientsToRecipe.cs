using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface IIngredientsToRecipeDal
{
    List<IngredientsToRecipe> GetByRecipeId(int recipeId);

    bool AddToRecipe(List<IngredientsToRecipe> ingredients);

}
