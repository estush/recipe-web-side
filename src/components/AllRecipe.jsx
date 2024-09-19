import { useEffect, useState } from "react";
import { getAllRecipe, getCategory, getLevel, getUser } from "./js/api";
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "../css/Recipes.css";
import { setCurrentRecipe } from "../redux/action";
import { RecipeDetails } from "./RecipeDetails"; // ייבוא קומפוננטת RecipeDetails

export const AllRecipe = () => {
    const nav = useNavigate();
    const dis = useDispatch();
    const [categoryL, setCategoryL] = useState([]);
    const [levelL, setLevelL] = useState([]);
    const [userL, setUserL] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [user, setUser] = useState(""); // ניהול המשתמש הנבחר
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
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
        dis(setCurrentRecipe(r));
        setSelectedRecipe(r);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSelectedRecipe(null);
    };

    // סינון המתכונים לפי קטגוריה, רמה ומשתמש
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
                    <h1>Recipes</h1>
                    <div className="select-2">
                        <label className="select">
                            <select onChange={handleCategoryChange}>
                                <option value=""> כל הקטגוריות </option>
                                {categoryL && categoryL.map(x => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </label>
                        <label className="select">
                            <select onChange={handleUserChange}>
                                <option value="">  כל המשתמשים</option>
                                {userL && userL.map(x => (
                                    <option key={x.id} value={x.id}>{x.name}</option>
                                ))}
                            </select>
                        </label>
                        <label className="select">
                            <select onChange={handleLevelChange}>
                                <option value=""> כל הרמות </option>
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
                            <p>user: {r.userName}</p>
                            <p>level: {r.levelName}</p>
                            <p>category: {r.categoryName}</p>
                            <button onClick={() => handleRecipeClick(r)} className="buy">View Details</button>
                        </div>
                    </div>
                ))}
            </div>
            {showPopup && <RecipeDetails recipe={selectedRecipe} onClose={closePopup} />} {/* הוספת הפופאפ */}
            <Outlet />
        </>
    );
};
