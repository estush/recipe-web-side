using BLL.Interfaces;
using DTO.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {
        ILevelBll bll;

        public LevelController(ILevelBll bll)
        {
            this.bll = bll;
        }

        [HttpPost]
        public List<Level> Add([FromBody] Level level)
        {
            return this.bll.Add(level);
        }

        [HttpGet]
        public List<Level> GetAll()
        {
            return bll.GetAll();
        }
    }
}
