using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface ICategoryDal
{
    List<Category> GetAll();
    List<Category> Add(Category category);

}
