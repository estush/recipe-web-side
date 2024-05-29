import { useEffect, useState } from "react"
import {getLevel,addLevel } from "./api"

export const Level=()=>{
    const [list, setList] = useState()
    //החזרת כל הרמות 
    useEffect(() => {
        getLevel()
            // תופס הצלחה
        .then(x => {
            setList(x.data)
        })
            // תופס כשלון
        .catch(err => {
            console.log(err.message);
        })
    })
// add level
    const send=async (event) =>{
        debugger
        event.preventDefault()
        addLevel({name:event.target[0].value})
            .then(x => {
                setList(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return <>
        {list && list.map (g=>
            <h3 key={g.id}>{g.name}</h3>)}
        <form onSubmit={(e)=>send(e)}>
            <label htmlFor={'le'}>level:</label>
            <br></br>
            <input type={'Level'} id={'le'} placeholder="set Level"></input>
            <input type="submit" value={'add'}></input>
        </form>
    </>
    
}