import { useEffect, useState } from "react";
import { getAllRecipe, getCategory, getLevel, getUser } from "./js/api";
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "../css/Recipes.css";
import { setCurrentRecipe } from "../redux/action";
import { RecipeDetails } from "./RecipeDetails"; // Importing RecipeDetails component

export const AllRecipe = () => {
    const dispatch = useDispatch();
    // State for categories, levels, users, recipes, and selected recipe
    const [categoryL, setCategoryL] = useState([]);
    const [levelL, setLevelL] = useState([]);
    const [userL, setUserL] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [user, setUser] = useState("");
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Fetch all recipes, categories, levels, and users when the component mounts
        getAllRecipe()
            .then(x => setRecipe(x.data))
            .catch(err => console.log(err.message));
        getCategory()
            .then(x => setCategoryL(x.data))
            .catch(err => console.log(err.message));
        getLevel()
            .then(x => setLevelL(x.data))
            .catch(err => console.log(err.message));
        getUser()
            .then(x => setUserL(x.data))
            .catch(err => console.log(err.message));
    }, []);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };

    const handleRecipeClick = (r) => {
        dispatch(setCurrentRecipe(r)); // Set the current recipe in the Redux store
        setSelectedRecipe(r); // Set the selected recipe for the popup
        setShowPopup(true); // Show the popup with recipe details
    };

    const closePopup = () => {
        setShowPopup(false); // Hide the popup
        setSelectedRecipe(null); // Clear selected recipe
    };

    // Filter recipes based on selected category, level, and user
    const filteredRecipes = recipe.filter(r => {
        const matchesCategory = category ? r.categoryId === category : true;
        const matchesLevel = level ? r.levelId === level : true;
        const matchesUser = user ? r.userId === user : true;
        return matchesCategory && matchesLevel && matchesUser;
    });

    return (
        <>
            <form>
                <div>
                    <div className="select-2">
                        <label className="select">
                            <select onChange={handleCategoryChange}>
                                <option value="">Categories</option>
                                {categoryL && categoryL.map(x => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </label>
                        <label className="select">
                            <select onChange={handleUserChange}>
                                <option value="">All users</option>
                                {userL && userL.map(x => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </label>
                        <label className="select">
                            <select onChange={handleLevelChange}>
                                <option value="">Levels</option>
                                {levelL && levelL.map(x => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            </form>
            <div className="recipe-container">
                {filteredRecipes.map(r => (
                    <div key={r.id} className="card">
                        <div className="container">
                            <div className="img-container">
                                <img className="img1" src={`${process.env.PUBLIC_URL}/images/${r.id}.jpg`} alt={r.name} />
                            </div>
                            <p>{r.id}</p>
                            <h1>{r.name}</h1>
                            <p>User: {r.userName}</p>
                            <p>Level: {r.levelName}</p>
                            <p>Category: {r.categoryName}</p>
                            <button onClick={() => handleRecipeClick(r)} className="buy">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {showPopup && <RecipeDetails recipe={selectedRecipe} onClose={closePopup} />} {/* Adding the popup for recipe details */}
            <Outlet />
        </>
    );
};
