import axios from "axios"

// export default {
    // recipe
   export const getAllRecipe= () => {
        return axios.get(`https://localhost:7130/api/Recipe`)
    }
    export const addRecipe= (recipe) => {

        return axios.post(`https://localhost:7130/api/Recipe`,recipe)
    }
    // user
    export const addUser =(user)=>{
        return axios.post(`https://localhost:7130/api/User`,user)
    }
    export const getUser= async(email,password)=>{
        debugger
        const r=await axios.get(`https://localhost:7130/api/User/${email}/${password}`)
        debugger
        return r
        //מחזירה את המשתמש המתאים – אם לא נמצא - x.data=""
//	אם  - (x.data!="")המשתמש נמצא

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


// }



























// import axios from "axios"

// // export default {
//     // recipe
//    export const getAllRecipe= () => {
//         return axios.get(`https://localhost:7130/api/Recipe`)
//     },
//     addRecipe: (recipe) => {

//         return axios.post(`https://localhost:7130/api/Recipe`,recipe)
//     },
//     // user
//     addUser: (user)=>{
//         return axios.post(`https://localhost:7130/api/User`,user)
//     },
//     getUser: async(email,password)=>{
//         debugger
//         const r=await axios.get(`https://localhost:7130/api/User/${email}/${password}`)
//         debugger
//         return r
//         //מחזירה את המשתמש המתאים – אם לא נמצא - x.data=""
// //	אם  - (x.data!="")המשתמש נמצא

//     },
//     // category
//     addCategory: (category)=>{
//         return axios.post(`https://localhost:7130/api/Category`,category)
//     },
//     getCategory: ()=>{
//         return axios.get(`https://localhost:7130/api/Category`)
//     },
//     //level
//     addLevel: (level)=>{
//         return axios.post(`https://localhost:7130/api/Level`,level)
//     },
//     getLevel: ()=>{
//         return axios.get(`https://localhost:7130/api/Level`)
//     },
//     //ingredient
//     addIngrediant:(ing)=>{
//         return axios.post(`https://localhost:7130/api/Ingredient`,ing)
//     },
//     getIngrediant:()=>{
//         return axios.get(`https://localhost:7130/api/Ingredient`)
//     },
//     //ingredient for recipe
//     addResIngrediant:(ring)=>{
//         return axios.post(`https://localhost:7130/api/IngredientsToRecipe`,ring)
//     },
//     getResIngrediant:()=>{
//         return axios.get(`https://localhost:7130/api/ IngredientsToRecipe/{recipeId}`)
//     },
//     // response
//     addResponse:(response)=>{
//         return axios.post(`https://localhost:7130/api/CommentsToRecipe`,response)
//     },
//     getResponse:()=>{
//         return axios.get(`https://localhost:7130/api/ IngredientsToRecipe/{recipeId}`)
//     },


// // }