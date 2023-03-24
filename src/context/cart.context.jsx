import react, { createContext, useState } from "react";

export const cartsContext = createContext({
  isCartOpen: false,
  SetIsCartOpen: () => {},
});

const CartsProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <cartsContext.Provider value={value}>{children}</cartsContext.Provider>
  );
};

export default CartsProvider;
