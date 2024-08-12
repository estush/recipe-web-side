import { useEffect, useState } from "react"
import { getCategory,addCategory} from "./api"
import { useSelector } from "react-redux"

export const Category =()=>{
    const user=useSelector(x=>x.currentUser)
    const [list, setList] = useState()
 
    useEffect(() => {
        getCategory()
        .then(x => {
            setList(x.data)
        })
        .catch(err => {
            console.log(err.message);
        })
    }) 
      const send= (event) =>{
        event.preventDefault()
        console.log(event.target[0].value)
        addCategory({name: event.target[0].value})
        .then(x => {
            console.log(x)
            setList(x.data)
            console.log(list);
        })
        .catch(err => {
            console.log(err.message);
        })
        console.log(user)
}
    return <>
        {list && list.map(c=>
        <h3 key={c.id}>{c.name}</h3>)}
        <form onSubmit={(e)=>send(e)}>
            <label htmlFor={'ca'}>category:</label>
            <br></br>
            <input type={'category'} id={'ca'} placeholder="set category"></input>
            <input type="submit" value={'add'}></input>
        </form>

    </>      
}
