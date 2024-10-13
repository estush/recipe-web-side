import { useState, useEffect } from "react";
import { addIngrediant, getIngrediant } from "./js/api";
import { useNavigate } from "react-router";
import "../css/Category.css";

export const AddIngredient = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const nav = useNavigate();

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await getIngrediant();
                setIngredientList(response.data);
            } catch (err) {
                console.error(err.message);
                setErrorMessage('Error loading ingredients');
            }
        };
        fetchIngredients();
    }, []);

    const handleAdd = async (event) => {
        event.preventDefault();
        const name = event.target.name.value.trim();
        if (!name) return;

        try {
            await addIngrediant({ name });
            setSuccessMessage('Ingredient added successfully!');
            nav(`/AddRecipe`);
        } catch (err) {
            console.error(err.message);
            setErrorMessage('Error adding ingredient');
        }
    };

    return (
        <section>
            <h1>Add Ingredient</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p>{successMessage}</p>}
            <div>
                {ingredientList.map((ingredient, index) => (
                    <h2 key={index}>{ingredient.name}</h2>
                ))}
                <form onSubmit={handleAdd}>
                    <input name='name' placeholder='Add ingredient' required />
                    <input type="submit" value='Add' />
                </form>
            </div>
        </section>
    );
};
