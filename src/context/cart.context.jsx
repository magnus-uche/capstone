import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

  // check if cartItems have productToADD
  const isExistingCart = cartItems.find((items) => {
    return items.id === productToAdd.id;
  });

  // if true increment the quantity + 1
  if (isExistingCart) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  // then return the new array modified or add cartItems.
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// remove item from cart
const RemoveCartItem = (cartItems, id) =>
cartItems.filter((item) => item.id !== id);

const reduceItemQuantity = (cartItems, id) => {
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

const increaseItemQuantity = (cartItems, id) => {
  const newItem = cartItems.find((item) => item.id === id);
  if (newItem) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
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
  CartTotal : 0
});

const CartsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeFromCart = (id) => {
    setCartItems(RemoveCartItem(cartItems, id));
  };

  const decreaseCount = (id) => {
    setCartItems(reduceItemQuantity(cartItems, id));
  };

  const increaseCount = (id) => {
    setCartItems(increaseItemQuantity(cartItems, id));
  };

  useEffect(() => {
    let { totalCount, cartTotal} = cartItems.reduce((total, cartitem) => {
     const { price, quantity } = cartitem;
     let totalprice = price * quantity
     total.cartTotal += totalprice
     total.totalCount += quantity
     return total
    }, {totalCount: 0, cartTotal: 0});
    setCartCount(totalCount);
    setCartTotal(cartTotal);
  }, [cartItems]);

  const value = {
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
