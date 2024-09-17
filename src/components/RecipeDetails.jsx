import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addResIngrediant, getResIngrediant, getAllRecipe, getResponse } from "./js/api";
import "../css/detail.css";

export const RecipeDetails = () => {
    const [res, setRes] = useState([]);
    const [rt, setRecipe] = useState([]);
    const [responsesList, setRList] = useState([]);
    const [show, setShow] = useState(false); // נשתמש ב-state כדי לשלוט על התצוגה
    const userName = useSelector(u => u.currentUser);
    const r = useSelector(re => re.currentRecipe);

    useEffect(() => {
        // קבלת כל המתכונים
        getAllRecipe()
            .then(x => {
                setRecipe(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });

        // קבלת המרכיבים
        getResIngrediant()
            .then(x => {
                setRes(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });

        // קבלת התגובות
        getResponse()
            .then(x => {
                setRList(x.data);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    // הוספת תגובה
    const addResponse = async (event) => {
        event.preventDefault();
        if (!userName.id) {
            return;
        } else {
            addResIngrediant({ name: event.target[0].value })
                .then(x => {
                    setRes(x.data);
                })
                .catch(err => {
                    console.log(err.message);
                });
        }
    };

    const handleShowResponses = () => {
        setShow(!show); // שינוי מצב התצוגה
    };

    return (
        <>
            {r &&
                <div key={r.id} className="alldetails">
                    <h2>id: {r.id}</h2>
                    <h2>name: {r.name}</h2>
                    <h2>preparationTime: {r.preparationTime}</h2>
                    <h2>userId: {r.userId}</h2>
                    <h2>userName: {r.userName}</h2>
                    <h2>categoryId: {r.categoryId}</h2>
                    <h2>categoryName: {r.categoryName}</h2>
                    <h2>levelId: {r.levelId}</h2>
                    <h2>levelName: {r.levelName}</h2>
                    <h2>note: {r.note}</h2>
                    <h2>instructions: {r.instructions}</h2>
                    {/* <img src={r.pic} alt="Recipe" /> */}

                    <button onClick={handleShowResponses}>Show Responses</button>
                    
                    {show && responsesList && responsesList.map(resp => (
                        <div key={resp.id}>
                            <p>id: {resp.id}</p>
                            <p>recipeId: {resp.recipeId}</p>
                            <p>userId: {resp.userId}</p>
                            <p>userName: {resp.userName}</p>
                            <p>comment: {resp.comment}</p>
                        </div>
                    ))}
                </div>
            }

            {userName && (
                <div>
                    <form onSubmit={(e) => addResponse(e)}>
                        <input placeholder={"Add response"}></input>
                        <br />
                        <input type="submit" value={'Send'}></input>
                    </form>
                </div>
            )}
        </>
    );
};
