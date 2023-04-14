import React,{ useContext } from 'react'
import { cartsContext } from '../../context/cart.context'
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import {
  CheckoutContainer, 
  CheckoutHeader,
  HeaderBlock,
  Total
} from './checkout.styles.jsx'
const Checkout = () => {
const {cartItems, cartTotal} = useContext(cartsContext);

  return (
   <CheckoutContainer>
    <CheckoutHeader>
    <HeaderBlock>
    <span>product</span>
    </HeaderBlock>
    <HeaderBlock>
    <span>Description</span>
    </HeaderBlock>
    <HeaderBlock>
    <span>Quantity</span>
    </HeaderBlock>
    <HeaderBlock >
    <span>Price</span>
    </HeaderBlock>
    <HeaderBlock>
    <span>Remove</span>
    </HeaderBlock>
    </CheckoutHeader>
    
    {cartItems.map((cartitem)=>{
      return(
      <CheckOutItem key={cartitem.id} cartitem={cartitem}/>
        )
      })}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}



export default Checkout;