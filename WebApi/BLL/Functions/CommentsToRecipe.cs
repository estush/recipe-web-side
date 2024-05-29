using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class CommentsToRecipeBll : ICommentsToRecipeBll
{
    ICommentsToRecipeDal dal;
    IMapper mapper;

    public CommentsToRecipeBll(ICommentsToRecipeDal dal)
    {
        this.dal = dal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public bool AddToRecipe(CommentsToRecipe comment)
    {
        return dal.AddToRecipe(mapper.Map<CommentsToRecipe, DAL.Models.CommentsToRecipe>(comment));
    }

    public List<CommentsToRecipe> GetByRecipeId(int recipeId)
    {
        return mapper.Map<List<DAL.Models.CommentsToRecipe>, List<CommentsToRecipe>>(dal.GetByRecipeId(recipeId));
    }
}
