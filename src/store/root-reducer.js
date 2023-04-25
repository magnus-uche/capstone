import { combineReducers } from "redux";
import { useReducer } from "./user/user.reducer";
import { categoryReducer } from "./category/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    user: useReducer,
    category: categoryReducer,
    cart: cartReducer
});