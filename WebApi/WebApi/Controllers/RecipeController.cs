using BLL.Interfaces;
using DTO.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        IRecipeBll bll;

        public RecipeController(IRecipeBll bll)
        {
            this.bll = bll;
        }

        [HttpPost]
        public int Add([FromBody] Recipe recipe)
        {
            return bll.Add(recipe);
        }

        [HttpGet]
        public List<Recipe> GetAll()
        {
            return bll.GetAll();
        }
    }
}
