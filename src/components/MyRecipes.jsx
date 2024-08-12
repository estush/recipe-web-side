import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { getAllRecipe } from "./api"

export const MyRecipes = () => {

   const nav = useNavigate()
   const user= useSelector(u=>{return u.currentUser})
   const [rlist, setRecipeList] = useState()

   useEffect(()=>{
      getAllRecipe()
      .then(x => {
         setRecipeList(x.data)
      })
      .catch(err => {
         console.log(err.message);
      })

   })

   const AddRecipe=()=>{
      nav(`/AddRecipe`)
   }

    return <>
    <body>
       <h1>האזור שלי</h1> 
       {rlist && rlist.map(recipe => {
            if (recipe.userId===user.id) {
                return (
                  <div key={recipe.id}> 
                    <p>{recipe.id}</p>
                    <p>{recipe.name}</p>
                    <p>user: {recipe.userName}</p>
                    <p>level: {recipe.levelName}</p>  
                    <p>category:{recipe.categoryName}</p> 
                  </div>
                )
        }})}
        <button onClick={()=>AddRecipe()}>add recipe</button>
        <Outlet></Outlet>

    </body>
    </>}
