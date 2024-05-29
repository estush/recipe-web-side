using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface ICommentsToRecipeDal
{
    List<CommentsToRecipe> GetByRecipeId(int recipeId);

    bool AddToRecipe(CommentsToRecipe comment);

}
