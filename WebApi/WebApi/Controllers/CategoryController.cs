using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BLL.Interfaces;
using DTO.Classes;
namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        ICategoryBll bll;

        public CategoryController(ICategoryBll bll)
        {
            this.bll = bll;
        }

        [HttpPost]
        public List<Category> Add(Category category)
        {
           return this.bll.Add(category);
        }

        [HttpGet]
        public List<Category> GetAll()
        {
            return bll.GetAll();
        }

    }
}
