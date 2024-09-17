export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user };
};

export const setManager = (manager) => {
    return { type: 'SET_MANAGER', payload: manager };
};

export const setCurrentRecipe = (recipe) => {
    return { type: 'SET_CURRENT_RECIPE', payload: recipe };
};
