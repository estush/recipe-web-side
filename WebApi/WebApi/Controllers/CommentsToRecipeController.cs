using BLL.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DTO.Classes;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsToRecipeController : ControllerBase
    {
        ICommentsToRecipeBll bll;

        public CommentsToRecipeController(ICommentsToRecipeBll bll)
        {
            this.bll = bll;
        }

        [HttpGet("{recipeId}")]
        public List<CommentsToRecipe> GetByRecipeId(int recipeId)
        {
            return bll.GetByRecipeId(recipeId);
        }

        [HttpPost]
        public bool AddToRecipe([FromBody] CommentsToRecipe comment)
        {
            return bll.AddToRecipe(comment);
        }
    }
}
