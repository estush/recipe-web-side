using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class CategoryBll : ICategoryBll
{
    ICategoryDal dal;
    IMapper mapper;

    public CategoryBll(ICategoryDal dal)
    {
        this.dal = dal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public List<Category> Add(Category category)
    {
        List<DAL.Models.Category> list = dal.Add(mapper.Map<Category, DAL.Models.Category>(category));

        if(list != null)
        {
            return mapper.Map<List<DAL.Models.Category>, List<Category>>(list);
        }
        return null;
    }

    public List<Category> GetAll()
    {
        return mapper.Map<List<DAL.Models.Category>, List<Category>>(dal.GetAll());
    }
}
