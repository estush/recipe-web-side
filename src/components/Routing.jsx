import { Route, Routes } from "react-router"
import { Home1 } from "./Home1"
import { Login } from "./Login"
import { AllRecipe } from "./AllRecipe"
import { Register } from "./Register"
import { MyRecipes } from "./MyRecipes"
import { Category } from "./Category"
import { Level } from "./Level"
import { RecipeDetails } from "./RecipeDetails"
import { AddIngredient } from "./AddIngredient"
import { AddRecipe } from "./AddRecipe"

export const Routing=()=>{
    return<>
    <Routes >
        <Route path="Home1" element={<Home1></Home1>} ></Route>
        <Route path="Login" element={<Login></Login>} ></Route>
        <Route path="AddRecipe" element={<AddRecipe></AddRecipe>}></Route>
        <Route path="AllRecipe" element={<AllRecipe></AllRecipe>} >
            <Route path="RecipeDetails" element={<RecipeDetails></RecipeDetails>}></Route>
        </Route>
        <Route path="Register" element={<Register></Register>} ></Route>
        <Route path="MyRecipes" element={<MyRecipes></MyRecipes>} >
            <Route path="AddRecipe" element={<AddRecipe></AddRecipe>}></Route>
        </Route>
        <Route path="Category" element={<Category></Category>}>category</Route> 
        <Route path="Level" element={<Level></Level>}>Level</Route> 
        <Route path="addIngrediant" element={<AddIngredient></AddIngredient>}></Route>
    </Routes>
    </>
}