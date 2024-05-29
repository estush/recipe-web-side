CREATE DATABASE RecipesDB
go

use RecipesDB

--משתמשים
create table Users(
--קוד משתמש
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--שם משפחה
LastName nvarchar (50) NOT NULL,
--שם פרטי
FirstName nvarchar (50) NOT NULL,
--אימייל
Email nvarchar(50) NOT NULL,
--סיסמה
Password nvarchar(50) NOT NULL
)

--קטגוריות
CREATE TABLE Categories(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--שם
Name nvarchar(50) NOT NULL
)

--רמות
CREATE TABLE Levels(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--שם
Name nvarchar(50) NOT NULL
)

--מתכונים
create TABLE Recipes(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--שם
Name nvarchar(50) NOT NULL, 
--שם תמונה
Pic nvarchar(50),
--זמן הכנה
PreparationTime nvarchar(50),
--הוראות הכנה
Instructions nvarchar(1000),
--קוד משתמש - עורך המתכון
UserId int NOT NULL FOREIGN KEY REFERENCES Users(Id),
--קוד קטגוריה
CategoryId int NOT NULL FOREIGN KEY REFERENCES Categories(Id),
--קוד רמה
LevelId int NOT NULL FOREIGN KEY REFERENCES Levels(Id),
--נימה אישית של העורך
Note nvarchar(100) 
)

--רכיבים
CREATE TABLE Ingredients(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--שם
Name nvarchar(20) NOT NULL
)

--רכיבים למתכון
CREATE TABLE IngredientsToRecipe(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--קוד מתכון
RecipeId int NOT NULL FOREIGN KEY REFERENCES Recipes(Id),
--קוד רכיב
IngredientId int NOT NULL FOREIGN KEY REFERENCES Ingredients(Id),
--כמות
Amount nvarchar(50)
)

--תגובות למתכון
CREATE TABLE CommentsToRecipe(
--קוד
Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
--קוד מתכון
RecipeId int NOT NULL FOREIGN KEY REFERENCES Recipes(Id),
--קוד משתמש
UserId int NOT NULL FOREIGN KEY REFERENCES Users(Id),
--תגובה
Comment nvarchar(100)
)