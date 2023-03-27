import React, { useContext } from 'react';
import './product-card.styles.scss';
import Button from '../button/button.component';
import { cartsContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(cartsContext);
  
  const addProductCart = () =>{
  addItemToCart(product)
  }
const { name, price, imageUrl} = product;

  return (
    <div className='product-card-container'>
    <img src={imageUrl} alt={`${name}`}/>
    <div className='footer'>
    <span className='name'>{name}</span>
    <span className='price'>{price}</span>
    </div>
    <Button buttonType='inverted' onClick={addProductCart}>Add to card</Button>
    </div>
  )
};


export default ProductCard;