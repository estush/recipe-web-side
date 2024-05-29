import { useSelector } from "react-redux"
import '../redux/store'
import { useEffect, useState } from "react"
import { addResIngrediant, getResIngrediant, getAllRecipe ,getResponse} from "./api"
import "../css/detail.css"

export const RecipeDetails = () => {
    const [res, setRes] = useState()
    const [rt, setRecipe] = useState()
    const [responsesList, setRList] = useState()
    const show =false
    debugger
    const userName = useSelector(u => u.currentUser)
    const r = useSelector(re => re.currentRecipe)

    useEffect(() => {
        // get all
        getAllRecipe()
            .then(x => {
                setRecipe(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        // get response
        getResIngrediant()
            .then(x => {
                setRes(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
        getResponse()
        .then(x => {
            setRList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])
    //add response
    const addResponse = async (event) => {
        if (userName.id == undefined) {
            event.preventDefault()
            return;
        }
        else {
            addResIngrediant({ name: event.target[0].value })
                .then(x => {
                    setRes(x.data)
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }
    const sendAll = () => {

show=true
    }


    return <>
        {r &&
            <div key={r.id} className="alldetails">
                <h2>id: {r.id}</h2>
                <br></br>
                <h2> name: {r.name}</h2>
                <h2> preparationTime: {r.preparationTime}</h2>
                <h2>userId: {r.userId}</h2>
                <h2>userName: {r.userName}</h2>
                <h2>categoryId: {r.categoryId}</h2>
                <h2>categoryName: {r.categoryName}</h2>
                <h2>levelId:{r.levelId}</h2>
                <h2>levelName:{r.levelName}</h2>
                <h2>note:{r.note}</h2>
                <h2>instructions:{r.instructions}</h2>
        {/* <img >{r.pic}</img> */}
       
        <button onClick={()=>sendAll()}>responses</button>
        {show&&responsesList && responsesList.map(com=>{
            return(
                <div key={com.id}> 
                    {/* <p>id: {comment.id}</p>
                    <p>{comment.recipeId}</p>
                    <p>{comment.userId}</p>
                    <p>{comment.userName}</p> */}
                    <p>{com.comment}</p>
                </div>)
            })}
            </div>

        }

        {/* {list && list.map(resp=>{
            return(
                <div key={resp.id}> 
                    <p>id: {comment.id}</p>
                    <p>{comment.recipeId}</p>
                    <p>{comment.userId}</p>
                    <p>{comment.userName}</p>
                    <p>{resp.comment}</p>
                </div>)
            })} */}
if(currentUser){
        <div>
        <form onSubmit={(e) => addResponse(e)}>
            <input placeholder={"add response"}></input>
            <br></br>
            <input type="submit" value={'send'}></input>
        </form>
    </div>
}

    </>
}