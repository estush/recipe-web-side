using System;
using System.Collections.Generic;
using DTO.Classes;


namespace BLL.Interfaces;

public interface IRecipeBll
{
    List<Recipe> GetAll();
    int Add(Recipe recipe);

}
