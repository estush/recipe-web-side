import { useSelector } from "react-redux";
import { addRecipe, getLevel, getCategory, getIngrediant, getAllRecipe } from "./js/api";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import '../css/add.css';

export const AddRecipe = () => {
    const user = useSelector(u => u.currentUser);
    const nav = useNavigate();

    const [CategoryList, setCategoryList] = useState([]);
    const [LevelList, setLevelList] = useState([]);
    const [IngredientList, setIngredientList] = useState([]);
    
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

        let cName = CategoryList.find(x => x.id === byCategory)?.name || "";
        let lName = LevelList.find(x => x.id === byLevel)?.name || "";

        const newRecipe = {
            id: 0, // חשוב להוסיף את השדה id
            name: event.target.name.value,
            pic: event.target.pic.value, // הוסף שדה לתמונה
            preparationTime: event.target.preparationTime.value, // הוסף שדה לזמן הכנה
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
                nav(`/Home1`); // Redirect after success if desired
            })
            .catch(err => console.log(err.message));
    };

    const addIng = () => {
        nav(`/addIngrediant`);
    };

    return (
        <>
            <h1>Add Recipe:</h1>
            <form className="addRecipe" onSubmit={add}>
                <label htmlFor="name">Name:</label>
                <input id="name" name="name" type="text" placeholder="Recipe Name" required />
                <br />
                <label htmlFor="pic">Picture:</label>
                <input id="pic" name="pic" type="text" placeholder="Picture URL" required /> {/* הוסף שדה לתמונה */}
                <br />
                <label htmlFor="preparationTime">Preparation Time:</label>
                <input id="preparationTime" name="preparationTime" type="text" placeholder="Preparation Time" />
                <br />
                <label htmlFor="note">Note:</label>
                <input id="note" name="note" type="text" placeholder="Note" />
                <br />
                <label htmlFor="instructions">Instructions:</label>
                <textarea id="instructions" name="instructions" placeholder="Instructions" />
                <br />
                <label htmlFor="categories">Categories:</label>
                <select id="categories" name="categories" onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    {CategoryList.map(x => (
                        <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                </select>
                <br />
                <label htmlFor="levels">Levels:</label>
                <select id="levels" name="levels" onChange={(e) => setLevel(e.target.value)} required>
                    <option value="">Select Level</option>
                    {LevelList.map(x => (
                        <option key={x.id} value={x.id}>{x.name}</option>
                    ))}
                </select>
                <br />
                {IngredientList.map(x => (
                    <div key={x.id}>
                        <label htmlFor={x.id}> {x.name} </label>
                        <input type="checkbox" id={x.id} name={`ingredient-${x.id}`} />
                        <input type="text" placeholder="Amount" id={`amount-${x.id}`} />
                    </div>
                ))}
                <br />
                <button type="button" onClick={addIng}>Add Ingredient</button>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};
