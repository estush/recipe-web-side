using System;
using System.Collections.Generic;
using DTO.Classes;

namespace BLL.Interfaces;

public interface ICategoryBll
{
    List<Category> GetAll();
    List<Category> Add(Category category);

}
