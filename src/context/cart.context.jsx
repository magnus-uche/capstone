import react, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) =>{
// check if cartItems have productToADD
const isExistingCart = cartItems.find((items)=>{
return items.id === productToAdd.id;
});
// if true increment the quantity + 1
if(isExistingCart) {
return cartItems.map((cartItem)=> {
 return cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
})
}
// then return the new array modified or add cartItems. 
return  [...cartItems, {...productToAdd, quantity: 1}];
};

export const cartsContext = createContext({
  cartItems: [],
  cartCount:0, 
  addItemToCart: ()=> {},
  isCartOpen: false,
  SetIsCartOpen: () => {},
});

const CartsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(()=>{
  let totalCount = cartItems.reduce((total, cartitem) => {
 return total + cartitem.quantity
  }, 0);
  setCartCount(totalCount);
  }, [cartItems]);
  const value = { isCartOpen, setIsCartOpen, addItemToCart,
  cartItems, cartCount };

  return (
    <cartsContext.Provider value={value}>{children}</cartsContext.Provider>
  );
};

export default CartsProvider;
