import React, { useContext } from "react";
import {CheckoutItemContainer, ImageContainer} from "./checkout-item.styles";
import { cartsContext } from "../../context/cart.context";

const CheckOutItem = ({ cartitem }) => {
  const { cartItems, decreaseCount, increaseCount, removeFromCart } =
    useContext(cartsContext);

  const { id, imageUrl, quantity, price, name } = cartitem;

 const decreaseHandler = () =>
  decreaseCount(id)


 const increaseHandler = () =>
 increaseCount(id)
 
  const clearitemHandler = () => 
    removeFromCart(id);
  

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decreaseHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseHandler} >&#10095;</div>
      </span>
      <span className="price"> {price}</span>
      <div onClick={clearitemHandler} className="remove-button">
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

export default CheckOutItem;
