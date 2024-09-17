import axios from "axios"

// export default {
    // recipe
   export const getAllRecipe= () => {
        return axios.get(`https://localhost:7130/api/Recipe`)
    }
    export const addRecipe= (Recipe) => {
        return axios.post(`https://localhost:7130/api/Recipe`, Recipe)
        .then(response => {
            console.log("Response from server:", response.data);  // הוסף שורת console.log זו כדי לראות את התגובה מהשרת
            return response;
          
        })
        .catch(error => {
            console.error("Error adding recipe:", error.response ? error.response.data : error.message);
            throw error;
        });
    }
    // user
    export const addUser =(user)=>{

        return axios.post(`https://localhost:7130/api/User`,user)
    }
    export const getUser= async(email,password)=>{
        const r=await axios.get(`https://localhost:7130/api/User/${email}/${password}`)
        return r

    }
    // category
    export const addCategory= (category)=>{
        return axios.post(`https://localhost:7130/api/Category`,category)
    }
    export const getCategory= ()=>{
        return axios.get(`https://localhost:7130/api/Category`)
    }
    //level
    export const addLevel= (level)=>{
        return axios.post(`https://localhost:7130/api/Level`,level)
    }
    export const getLevel= ()=>{
        return axios.get(`https://localhost:7130/api/Level`)
    }
    //ingredient
    export const addIngrediant= (ing)=>{
        return axios.post(`https://localhost:7130/api/Ingredient`,ing)
    }
    export const getIngrediant= ()=>{
        return axios.get(`https://localhost:7130/api/Ingredient`)
    }
    //ingredient for recipe
    export const addResIngrediant= (ring)=>{
        return axios.post(`https://localhost:7130/api/IngredientsToRecipe`,ring)
    }
    export const getResIngrediant= ()=>{
        return axios.get(`https://localhost:7130/api/ IngredientsToRecipe/{recipeId}`)
    }
    // response
    export const addResponse= (response)=>{
        return axios.post(`https://localhost:7130/api/CommentsToRecipe`,response)
    }
    export const getResponse= ()=>{
        return axios.get(`https://localhost:7130/api/ IngredientsToRecipe/{recipeId}`)
    }

