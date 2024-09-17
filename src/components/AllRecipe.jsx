import { useEffect, useState } from "react";
import { getAllRecipe, getCategory, getLevel, getUser } from "./js/api"
import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "../css/Recipes.css"
import { RecipeDetails } from "./RecipeDetails";
import { setCurrentRecipe } from "../redux/action";

export const AllRecipe = () => {
    // getAllRecipe()
    //     .then(x => {
    //         setRecipe(x.data)
    //         console.log(x.data);
    //     })
    //     .catch(err => {
    //         console.log("err messege")
    //     })

    // const send = (recipe) => {
    //     dis(setCurrentRecipe(recipe))
    //         nav('/Details')
    //     }

    const nav = useNavigate()
    const dis = useDispatch()
    const [categoryL, setCategoryL] = useState()
    const [levelL, setLevelL] = useState()
    const [userL, setUserL] = useState()
    //List of Recipies
    const [recipe, setRecipe] = useState()
    // with choosing
    const [category, setCategory] = useState()
    const [level, setLevel] = useState()

    useEffect(() => {
        // get all
        getAllRecipe()
            .then(x => {
                setRecipe(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getCategory()
            .then(x => {
                setCategoryL(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getLevel()
            .then(x => {
                setLevelL(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getUser()
            .then(x => {
                setUserL(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })

    }, [])


    function getC(event) {
        setCategory(event)
        console.log(category);
    }
    const forDetails = (r) => {
        dis(setCurrentRecipe(r))
        nav('RecipeDetails')

    }

    return <>
        <form>
            <div>
                <h1>recipe</h1>
                <div className="select-2">
                    <label className="select">
                        <select onChange={(e) => getC(e)}>
                            <option value="" placeholder="all"> כל הקטגוריות </option>
                            {categoryL && categoryL.map(x =>
                                <option value={x.id} > {x.name}</option>
                            )}
                        </select>
                    </label>
                    <label class="select">
                        <select onChange={(e) => getC(e)}>
                            <option value="" placeholder="all">  כל המשתמשים</option>
                            {userL && userL.map(x =>
                                <option value={x.id} >{x.name}</option>
                            )}
                        </select>
                    </label>
                    <label className="select">
                        <select onChange={(e) => setLevel(e.target.value)}>
                            <option value=""> כל הרמות </option>
                            {levelL && levelL.map(x =>
                                <option value={x.id}>{x.name} </option>
                            )}
                        </select>
                    </label>
                </div>
            </div>
        </form>
        {recipe && recipe.map(r => {
            if ((recipe.categoryName == category || !category) &&
                (recipe.levelName == level || !level)) {

                return (
                    <div key={r.id} className="card" >
                        <div class="container">
                            <div class="img-container">
                                <img calssName="img1" src={`${process.env.PUBLIC_URL}/images/${r.id}.jpg`}></img>
                            </div>
                            <p>{r.id}</p>
                            <h1>{r.name}</h1>
                            <p>user: {r.userName}</p>
                            <p>level: {r.levelName}</p>
                            <p>category:{r.categoryName}</p>
                            <button onClick={() => forDetails(r)} class="buy" >details</button>
                            {/* <a href="#popup6">Click Me (Style 6)</a>
                            {/* <!--popup6--> 
                            <div id="popup6" class="popup-container popup-style-6">
                                <div class="popup-content">
                                    <a href="#" class="close">&times;</a>
                                    <h3>Popup 6</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                )
            }
        })
        }
        <Outlet></Outlet>

    </>
}



