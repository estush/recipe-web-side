using System;
using System.Collections.Generic;
using DTO.Classes;

namespace BLL.Interfaces;

public interface IUserBll
{
    User Register(User user);
    User Login(string email, string password);

}
