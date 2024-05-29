using System;
using System.Collections.Generic;
using DTO.Classes;


namespace BLL.Interfaces;

public interface ILevelBll
{
    List<Level> GetAll();
    List<Level> Add(Level level);

}
