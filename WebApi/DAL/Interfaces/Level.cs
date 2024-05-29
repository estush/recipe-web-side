using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface ILevelDal {

    List<Level> GetAll();
    List<Level> Add(Level level);

}
