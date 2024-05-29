using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class RecipeBll : IRecipeBll
{
    IRecipeDal dal;
    IIngredientsToRecipeDal ingDal;
    IMapper mapper;

    public RecipeBll(IRecipeDal dal, IIngredientsToRecipeDal ingDal)
    {
        this.dal = dal;
        this.ingDal = ingDal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public int Add(Recipe recipe)
    { 
        return dal.Add(mapper.Map<Recipe, DAL.Models.Recipe>(recipe));
    }

    public List<Recipe> GetAll()
    {
        return mapper.Map<List<DAL.Models.Recipe>, List<Recipe>>(dal.GetAll());
    }
}
