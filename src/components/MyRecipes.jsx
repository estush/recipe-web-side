import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { getAllRecipe } from "./js/api";
import "../css/MyRecipes.css"; // ייבוא קובץ CSS

export const MyRecipes = () => {
    const nav = useNavigate();
    const user = useSelector(u => u.currentUser);
    const [rlist, setRecipeList] = useState([]);

    useEffect(() => {
        getAllRecipe()
            .then(x => {
                setRecipeList(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []); // הוספת [] כדי להפעיל את useEffect פעם אחת בלבד

    const AddRecipe = () => {
        nav(`/AddRecipe`);
    };

    return (
        <div className="my-recipes">
            <h1>האזור שלי</h1>
            <div className="recipe-container">
                {rlist && rlist.map(recipe => {
                    if (recipe.userId === user.id) {
                        return (
                            <div key={recipe.id} className="recipe-card">
                                <p className="recipe-id">ID: {recipe.id}</p>
                                <h2 className="recipe-name">{recipe.name}</h2>
                                <p>user: {recipe.userName}</p>
                                <p>level: {recipe.levelName}</p>
                                <p>category: {recipe.categoryName}</p>
                            </div>
                        );
                    }
                    return null; // במקרה ואין התאמה
                })}
            </div>
            <button className="add-recipe-button" onClick={AddRecipe}>הוסף מתכון</button>
            <Outlet />
        </div>
    );
};
