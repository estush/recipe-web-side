using AutoMapper;
using BLL.Interfaces;
using DAL.Interfaces;
using DTO.Classes;
using System;
using System.Collections.Generic;

namespace BLL.Functions;

public class LevelBll : ILevelBll
{
    ILevelDal dal;
    IMapper mapper;

    public LevelBll(ILevelDal dal)
    {
        this.dal = dal;

        var config = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<RecipeProfile>();
        });

        mapper = config.CreateMapper();
    }

    public List<Level> Add(Level level)
    {
        List<DAL.Models.Level> list = dal.Add(mapper.Map<Level, DAL.Models.Level>(level));

        if (list != null)
        {
            return mapper.Map<List<DAL.Models.Level>, List<Level>>(list);
        }
        return null;
    }

    public List<Level> GetAll()
    {
        return mapper.Map<List<DAL.Models.Level>, List<Level>>(dal.GetAll());
    }
}
