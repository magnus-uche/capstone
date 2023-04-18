import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer.utils";

const addToCart = (productToAdd, cartItems) => {
  const isExistingCart = cartItems.find(
    (items) => items.id === productToAdd.id
  );
  // if true increment the quantity + 1
  if (isExistingCart) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (id, cartItems) => {
  return cartItems.filter((item) => item.id !== id);
};

const increaseItemCount = (id, cartItems) => {
  const newItems = cartItems.find((item) => item.id === id);

  if (newItems) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
};

const reduceItemCount = (id, cartItems) => {
  const newItem = cartItems.find((item) => item.id === id);
  if (newItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== id);
  }
  // reduce the quantity of one of marching item in the cart
  return cartItems.map((item) =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN"
}

const reducer = (state, action) => {
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
      throw new Error(`Unhandled type of  ${type} is cartReducer`);
  }
};

const initial_state = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  isCartOpen: true,
};

export const cartsContext = createContext({
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeFromCart: () => {},
  isCartOpen: false,
  SetIsCartOpen: () => {},
  decreaseCount: () => {},
  increaseCount: () => {},
  addCount: () => {},
  cartTotal: 0,
});

const CartsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { cartCount, cartItems, cartTotal, isCartOpen } = state;

  const updateCartItemReducer = (newCartItems) => {
    const totalCount = newCartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity;
    }, 0);
    const cartTotal = newCartItems.reduce((total, cartitem) => {
      return total + cartitem.quantity * cartitem.price;
    }, 0);
    dispatch(
      createAction( CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: totalCount,
        cartTotal: cartTotal,
      }))
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCart(productToAdd, cartItems);
    updateCartItemReducer(newCartItems);
  };

  const removeFromCart = (id) => {
    const newCartItems = removeCartItem(id, cartItems);
    updateCartItemReducer(newCartItems);
  };

  const decreaseCount = (id) => {
    const newCartItems = reduceItemCount(id, cartItems);
    updateCartItemReducer(newCartItems);
  };

  const increaseCount = (id) => {
    const newCartItems = increaseItemCount(id, cartItems);
    updateCartItemReducer(newCartItems);
  };

  const setIsCartOpen = (bool) =>{

  dispatch(
   createAction(
  CART_ACTION_TYPE.SET_IS_CART_OPEN,
  { 
        isCartOpen:bool
      }))
  }
  
  const value = {
    ...state,
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    cartTotal,
    decreaseCount,
    increaseCount,
    removeFromCart,
  };

  return (
    <cartsContext.Provider value={value}>{children}</cartsContext.Provider>
  );
};

export default CartsProvider;
