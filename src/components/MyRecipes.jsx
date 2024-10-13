import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { getAllRecipe } from "./js/api";
import "../css/MyRecipes.css"; 
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
    }, []); 
    const AddRecipe = () => {
        nav(`/AddRecipe`);
    };

    return (
        <div className="my-recipes">
            <h1>my recipes</h1>
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
                    return null; 
                       })}
            </div>
            <button className="add-recipe-button" onClick={AddRecipe}>add recipe </button>
            <Outlet />
        </div>
    );
};
