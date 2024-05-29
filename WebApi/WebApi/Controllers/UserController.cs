using BLL.Interfaces;
using DTO.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IUserBll bll;

        public UserController(IUserBll bll)
        {
            this.bll = bll;
        }

        [HttpPost]
        public User Register([FromBody] User user)
        {
            return this.bll.Register(user);
        }

        [HttpGet("{email}/{password}")]
        public User Login(string email, string password)
        {
            return bll.Login(email, password);
        }
    }
}
