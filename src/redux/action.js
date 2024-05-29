
export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const setManager = (mana) => {
    return { type: 'SET_MANAGER', payload: mana }
}
export const setCurrentRecipe=(recipe)=>{
    return {type:`SET_CURRENT_RECIPE`,payload:recipe}
}
// export const getCurrentRecipe=(recipe)=>{
//     return {type:`GET_CURRENT_RECIPE`,payload:recipe}
// }
// export const deleteUser = (username, password) => {
//     return { type: 'DELETE_USER', payload: { username, password } }
// }