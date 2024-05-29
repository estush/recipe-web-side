using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;

namespace DAL.Functions;

public class UserDal : IUserDal
{
    RecipesDbContext db;

    public UserDal(RecipesDbContext db)
    {
        this.db = db;
    }

    public User Login(string email, string password)
    {
        return db.Users.FirstOrDefault(u => u.Email.Equals(email) && u.Password.Equals(password));
    }

    public User Register(User user)
    {
        try
        {
            db.Users.Add(user);
            db.SaveChanges();
            return db.Users.FirstOrDefault(u => u.Email.Equals(user.Email) && u.Password.Equals(user.Password));
        }
        catch
        {
            return null;
        }
    }
}
