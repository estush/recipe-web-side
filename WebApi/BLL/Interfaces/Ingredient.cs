using System;
using System.Collections.Generic;
using DTO.Classes;


namespace BLL.Interfaces;

public interface IIngredientBll
{
    List<Ingredient> GetAll();
    List<Ingredient> Add(Ingredient ingredient);

}
