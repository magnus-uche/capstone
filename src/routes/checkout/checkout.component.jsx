import React,{ useContext } from 'react'
import { cartsContext } from '../../context/cart.context'
import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss'
const Checkout = () => {
const {cartItems, cartTotal} = useContext(cartsContext);

  return (
   <div className="checkout-container">
    <div className='checkout-header'>
    <div className='header-block' >
    <span>product</span>
    </div>
    <div className='header-block' >
    <span>Description</span>
    </div>
    <div className='header-block' >
    <span>Quantity</span>
    </div>
    <div className='header-block' >
    <span>Price</span>
    </div>
    <div className='header-block' >
    <span>Remove</span>
    </div>
    </div>
    
    {cartItems.map((cartitem)=>{
      return(
      <CheckOutItem key={cartitem.id} cartitem={cartitem}/>
        )
      })}
      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}



export default Checkout;