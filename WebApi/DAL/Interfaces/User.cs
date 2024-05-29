using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Interfaces;

public interface IUserDal
{
   User Register(User user);
   User Login(string email, string password);

}
