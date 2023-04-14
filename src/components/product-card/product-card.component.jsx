import React, { useContext } from 'react';
import {ProductCardContainer,Footer, Name, Price } from './product-card.styles';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { cartsContext } from '../../context/cart.context';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(cartsContext);
  
  const addProductCart = () =>{
  addItemToCart(product)
  }

const { name, price, imageUrl} = product;
  return (
    <ProductCardContainer>
    <img src={imageUrl} alt={`${name}`}/>
    <Footer>
    <Name>{name}</Name>
    <Price>{price}</Price>
    </Footer>
    <Button buttonType= {BUTTON_TYPE_CLASSES.inverted} onClick={addProductCart}>Add to card</Button>
    </ProductCardContainer>
  )
};

export default ProductCard;