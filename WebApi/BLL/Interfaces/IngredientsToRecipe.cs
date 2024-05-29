using System;
using System.Collections.Generic;
using DTO.Classes;


namespace BLL.Interfaces;

public interface IIngredientsToRecipeBll
{
    List<IngredientsToRecipe> GetByRecipeId(int recipeId);

    bool AddToRecipe(List<IngredientsToRecipe> ingredients);

}
