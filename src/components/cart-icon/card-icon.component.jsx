import react, { useContext } from "react";
import "./card-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { cartsContext } from "../../context/cart.context";
const CardIcon = () => {
const { isCartOpen, setIsCartOpen } = useContext(cartsContext);

const toggleCart = () => {
    return setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container ">
      <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
