import { useContext } from "react";
import {
 CartIconContainer,
 ShoppingIcon,
 ItemCount
} from "./card-icon.styles";
import { cartsContext } from "../../context/cart.context";
const CardIcon = () => {
const { isCartOpen, setIsCartOpen, cartCount } = useContext(cartsContext);

const toggleCart = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer>
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;
