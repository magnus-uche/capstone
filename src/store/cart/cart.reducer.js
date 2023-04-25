import { CART_ACTION_TYPE } from "./cart.types";

const initial_state = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
  }

export const cartReducer = (state = initial_state, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CART_ACTION_TYPE.SET_CART_ITEMS:
        return {
          ...state,
          ...payload,
        };
  
      case CART_ACTION_TYPE.SET_IS_CART_OPEN:
        return {
          ...state,
          ...payload,
        };
      default:
        return state;
    }
  };