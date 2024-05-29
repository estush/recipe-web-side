using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class IngredientBll : IIngredientBll
{
    IIngredientDal dal;
    IMapper mapper;

    public IngredientBll(IIngredientDal dal)
    {
        this.dal = dal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public List<Ingredient> Add(Ingredient ingredient)
    {
        List<DAL.Models.Ingredient> list = dal.Add(mapper.Map<Ingredient, DAL.Models.Ingredient>(ingredient));

        if (list != null)
        {
            return mapper.Map<List<DAL.Models.Ingredient>, List<Ingredient>>(list);
        }
        return null;
    }

    public List<Ingredient> GetAll()
    {
        return mapper.Map<List<DAL.Models.Ingredient>, List<Ingredient>>(dal.GetAll());
    }
}
