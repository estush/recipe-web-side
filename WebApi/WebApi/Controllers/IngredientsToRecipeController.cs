using BLL.Interfaces;
using DTO.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientsToRecipeController : ControllerBase
    {
        IIngredientsToRecipeBll bll;

        public IngredientsToRecipeController(IIngredientsToRecipeBll bll)
        {
            this.bll = bll;
        }

        [HttpGet("{recipeId}")]
        public List<IngredientsToRecipe> GetByRecipeId(int recipeId)
        {
            return bll.GetByRecipeId(recipeId);
        }

        [HttpPost]
        public bool AddToRecipe([FromBody] List<IngredientsToRecipe> ingredients)
        {
            return bll.AddToRecipe(ingredients);
        }
    }
}
