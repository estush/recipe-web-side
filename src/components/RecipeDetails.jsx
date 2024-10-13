import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addResponse as apiAddResponse, getResIngrediant, getResponse } from "./js/api";
import "../css/detail.scss";

export const RecipeDetails = () => {
    const [res, setRes] = useState([]);
    const [responsesList, setRList] = useState([]);
    const [showResponses, setShowResponses] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const userName = useSelector(u => u.currentUser);
    const r = useSelector(re => re.currentRecipe);
    const recipeId = r?.id;

    useEffect(() => {
        if (recipeId && recipeId !== 0) {
            getResponse(recipeId)
                .then(x => setRList(x.data))
                .catch(err => console.log(err.message));

            getResIngrediant(recipeId)
                .then(x => setRes(x.data))
                .catch(err => console.log(err.message));
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    }, [recipeId]);

    const addResponse = async (event) => {
        event.preventDefault();
        if (!userName.id) return;

        const newResponse = {
            recipeId,
            userId: userName.id,
            userName: userName.firstName,
            comment: event.target[0].value
        };

        apiAddResponse(newResponse)
            .then(x => setRList(prev => [...prev, x.data]))
            .catch(err => console.log(err.message));
    };

    const handleShowResponses = () => {
        setShowResponses(prev => !prev);
    };

    const handleShowIngredients = () => {
        setShowIngredients(prev => !prev);
    };

    const togglePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button onClick={togglePopup} className="close-button">×</button>
                        {r && (
                            <div className="alldetails">
                                <h2>ID: {r.id}</h2>
                                <h2>Name: {r.name}</h2>
                                <h2>Preparation Time: {r.preparationTime}</h2>
                                <h2>User ID: {r.userId}</h2>
                                <h2>User Name: {r.userName}</h2>
                                <h2>Category ID: {r.categoryId}</h2>
                                <h2>Category Name: {r.categoryName}</h2>
                                <h2>Level ID: {r.levelId}</h2>
                                <h2>Level Name: {r.levelName}</h2>
                                <h2>Note: {r.note}</h2>
                                <h2>Instructions: {r.instructions}</h2>

                                <button onClick={handleShowResponses} className="styled-input">Show Responses</button>
                                {showResponses && responsesList.map(resp => (
                                    <div key={resp.id}>
                                        <p>User Name: {resp.userName}</p>
                                        <p>Comment: {resp.comment}</p>
                                    </div>
                                ))}

                                <button onClick={handleShowIngredients} className="styled-input">Show Ingredients</button>
                                {showIngredients && res.map(ingredient => (
                                    <div key={ingredient.id}>
                                        <p>Ingredient: {ingredient.name}</p>
                                        <p>Amount: {ingredient.amount}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {userName.firstName && (
                            <div>
                                <form onSubmit={addResponse}>
                                    <input className="styled-input" placeholder="Add response" />
                                    <br />
                                    <input type="submit" value={'Send'} />
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};
