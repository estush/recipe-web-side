import { useState } from "react"
import { addIngrediant, getIngrediant } from "./js/api"
import { useEffect } from "react"
import {  useNavigate } from "react-router";

export const AddIngredient =()=>{
    const [IngredientList,SetIngredientList]=useState()
    const [ingredient, SetIngredient]=useState()
    const nav =useNavigate()


    useEffect(() => {
        getIngrediant()
        .then(x => {
            SetIngredientList(x.data)
        })
            // תופס כשלון
        .catch(err => {
            console.log(err.message);
        })
    })
    const Add=(event)=>{
        event.preventDefault()
        addIngrediant({name: event.target[0].value})
        .then(x => {
            SetIngredient(x.data)
            alert('sucsess')
            nav(`/AddRecipe`)
        })
        .catch(err => {
            console.log(err.message);
        })

    }
  

    return<>
    <div>
    <h1>add ingredient</h1>
    {/* <IconButton
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    onClick={() => { navigate('/allEmployee') }}
                >
    <CloseIcon /> */}
    {IngredientList && IngredientList.map (x=>
        <h2>{x.name}</h2>
    )}
    <form onSubmit={(e)=>Add(e)}>
        <input id={'name'} placeholder={'add ingredient'} ></input>
        <input type="submit" id={'name'} value={'add'}></input>
    
    </form>
    </div>
    </>
}














{/* <form onSubmit={(e)=>send(e)}>
        <label htmlFor={'ca'}>category:</label>
        <br></br>
        <input type={'category'} id={'ca'} placeholder="set category"></input>
        <input type="submit" value={'add'}></input>
    </form> */}


// const send= (event) =>{
//     event.preventDefault()
//     console.log(event.target[0].value)
//     addCategory({name: event.target[0].value})
//     .then(x => {
//         console.log(x)
//         setList(x.data)
//         console.log(list);
//     })
//     .catch(err => {
//         console.log(err.message);
//     })
//     console.log(user)
// }
// return <>
//     {list && list.map(c=>
//     <h3 key={c.id}>{c.name}</h3>)}
//     <form onSubmit={(e)=>send(e)}>
//         <label htmlFor={'ca'}>category:</label>
//         <br></br>
//         <input type={'category'} id={'ca'} placeholder="set category"></input>
//         <input type="submit" value={'add'}></input>
//     </form>

// </>      
// }
