using System;
using System.Collections.Generic;
using DTO.Classes;

namespace BLL.Interfaces;

public interface ICommentsToRecipeBll
{
    List<CommentsToRecipe> GetByRecipeId(int recipeId);

    bool AddToRecipe(CommentsToRecipe comment);

}
