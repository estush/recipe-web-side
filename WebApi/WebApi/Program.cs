using BLL.Functions;
using BLL.Interfaces;
using DAL.Functions;
using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<RecipesDbContext>(options => options.UseSqlServer("Server=DESKTOP-E0FAPSB\\SQLEXPRESS;Database=RecipesDB;TrustServerCertificate=True;Trusted_Connection=True;"));

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddScoped(typeof(ICategoryDal), typeof(CategoryDal));
builder.Services.AddScoped(typeof(ICategoryBll), typeof(CategoryBll));

builder.Services.AddScoped(typeof(ICommentsToRecipeDal), typeof(CommentsToRecipeDal));
builder.Services.AddScoped(typeof(ICommentsToRecipeBll), typeof(CommentsToRecipeBll));

builder.Services.AddScoped(typeof(IIngredientDal), typeof(IngredientDal));
builder.Services.AddScoped(typeof(IIngredientBll), typeof(IngredientBll));

builder.Services.AddScoped(typeof(IIngredientsToRecipeDal), typeof(IngredientsToRecipeDal));
builder.Services.AddScoped(typeof(IIngredientsToRecipeBll), typeof(IngredientsToRecipeBll));

builder.Services.AddScoped(typeof(ILevelDal), typeof(LevelDal));
builder.Services.AddScoped(typeof(ILevelBll), typeof(LevelBll));

builder.Services.AddScoped(typeof(IRecipeDal), typeof(RecipeDal));
builder.Services.AddScoped(typeof(IRecipeBll), typeof(RecipeBll));

builder.Services.AddScoped(typeof(IUserDal), typeof(UserDal));
builder.Services.AddScoped(typeof(IUserBll), typeof(UserBll));

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {
            builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyHeader()
    .AllowAnyMethod();
;
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
