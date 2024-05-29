using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class IngredientsToRecipeBll : IIngredientsToRecipeBll
{

    IIngredientsToRecipeDal dal;
    IMapper mapper;

    public IngredientsToRecipeBll(IIngredientsToRecipeDal dal)
    {
        this.dal = dal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public bool AddToRecipe(List<IngredientsToRecipe> ingredients)
    {
        return dal.AddToRecipe(mapper.Map<List<IngredientsToRecipe>, List<DAL.Models.IngredientsToRecipe>>(ingredients));
    }

    public List<IngredientsToRecipe> GetByRecipeId(int recipeId)
    {
        return mapper.Map<List<DAL.Models.IngredientsToRecipe>, List<IngredientsToRecipe>>(dal.GetByRecipeId(recipeId));
    }
}
