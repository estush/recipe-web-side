using BLL.Interfaces;
using DTO.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        IIngredientBll bll;

        public IngredientController(IIngredientBll bll)
        {
            this.bll = bll;
        }

        [HttpPost]
        public List<Ingredient> Add([FromBody] Ingredient ingredient)
        {
            return this.bll.Add(ingredient);
        }

        [HttpGet]
        public List<Ingredient> GetAll()
        {
            return bll.GetAll();
        }
    }
}
