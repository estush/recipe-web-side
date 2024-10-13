import { useSelector } from "react-redux";
import { addRecipe, getLevel, getCategory, getIngrediant } from "./js/api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import '../css/add.css';

export const AddRecipe = () => {
    const user = useSelector(u => u.currentUser);
    const nav = useNavigate();

    const [categoryList, setCategoryList] = useState([]);
    const [levelList, setLevelList] = useState([]);
    const [ingredientList, setIngredientList] = useState([]);
    
    const [byLevel, setLevel] = useState("");
    const [byCategory, setCategory] = useState("");

    useEffect(() => {
        getCategory()
            .then(x => setCategoryList(x.data))
            .catch(err => console.log(err.message));

        getLevel()
            .then(x => setLevelList(x.data))
            .catch(err => console.log(err.message));

        getIngrediant()
            .then(x => setIngredientList(x.data))
            .catch(err => console.log(err.message));
    }, []);

    const add = (event) => {
        event.preventDefault();

        let cName = categoryList.find(x => x.id === byCategory)?.name || "";
        let lName = levelList.find(x => x.id === byLevel)?.name || "";

        const newRecipe = {
            id: 0,
            name: event.target.name.value,
            pic: event.target.pic.value,
            preparationTime: event.target.preparationTime.value,
            userId: user.id,
            userName: user.firstName,
            categoryId: byCategory,
            categoryName: cName,
            levelId: byLevel,
            levelName: lName,
            note: event.target.note.value,
            instructions: event.target.instructions.value,
        };

        addRecipe(newRecipe)
            .then(() => {
                nav(`/Home1`);
            })
            .catch(err => console.log(err.message));
    };

    const addIng = () => {
        nav(`/addIngrediant`);
    };

    return (
        <>
            <h1 className="add-recipe__title">Add Recipe:</h1>
            <form className="add-recipe__form" onSubmit={add}>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="name">Recipe Name:</label>
                    <input className="add-recipe__input" id="name" name="name" type="text" placeholder="Recipe Name" required />
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="pic">Picture URL:</label>
                    <input className="add-recipe__input" id="pic" name="pic" type="text" placeholder="Picture URL" required />
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="preparationTime">Preparation Time:</label>
                    <input className="add-recipe__input" id="preparationTime" name="preparationTime" type="text" placeholder="Preparation Time" />
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="note">Note:</label>
                    <input className="add-recipe__input" id="note" name="note" type="text" placeholder="Note" />
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="instructions">Instructions:</label>
                    <textarea className="add-recipe__input" id="instructions" name="instructions" placeholder="Instructions" />
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="categories">Select Category:</label>
                    <select className="add-recipe__select" id="categories" name="categories" onChange={(e) => setCategory(e.target.value)} required>
                        <option value="">Select Category</option>
                        {categoryList.map(x => (
                            <option key={x.id} value={x.id}>{x.name}</option>
                        ))}
                    </select>
                </div>
                <div className="add-recipe__field">
                    <label className="add-recipe__label" htmlFor="levels">Select Level:</label>
                    <select className="add-recipe__select" id="levels" name="levels" onChange={(e) => setLevel(e.target.value)} required>
                        <option value="">Select Level</option>
                        {levelList.map(x => (
                            <option key={x.id} value={x.id}>{x.name}</option>
                        ))}
                    </select>
                </div>
                {ingredientList.map(x => (
                    <div key={x.id} className="add-recipe__ingredients">
                        <label className="add-recipe__ingredient-label" htmlFor={x.id}>{x.name}:</label>
                        <input type="checkbox" className="add-recipe__ingredient-checkbox" id={x.id} name={`ingredient-${x.id}`} />
                        <input type="text" className="add-recipe__amount-input" placeholder="Amount" id={`amount-${x.id}`} />
                    </div>
                ))}
                <button type="button" className="add-recipe__button" onClick={addIng}>Add Ingredient</button>
                <input type="submit" className="add-recipe__submit" value="Submit" />
            </form>
        </>
    );
};
