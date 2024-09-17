// store.js

import { produce } from 'immer';
import { createStore } from 'redux';

const initialState = {
    manager: { email: "st3196420@gmail.com", password: 1121 },
    currentUser: { email: "anonimi@gmail.com" },
    isLogin: false, // ערך ברירת מחדל
    currentRecipe: { id: 0 }
};

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        case 'SET_MANAGER':
            state.manager = action.payload;
            break;
        case 'SET_CURRENT_RECIPE':
            state.currentRecipe = action.payload;
            break;
        default:
            break;
    }
}, initialState);

const store = createStore(reducer);
export default store;
