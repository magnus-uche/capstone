import React, { useContext } from "react";
import "./checkout-item.styles.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
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
    </div>
  );
};

export default CheckOutItem;
