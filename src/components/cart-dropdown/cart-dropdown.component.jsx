import react, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartsContext } from '../../context/cart.context'
import {
    CartDropdownContainer, 
    EmptyMessage,
     CartItems } from './cart-dropdown.styles'

const CartDropdown = () => {
    const { cartItems } = useContext(cartsContext);
    const navigation = useNavigate();
     
    const goTocheckOutHandler = () => {
        navigation("/checkOut");
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) : <EmptyMessage>your cart is empty</EmptyMessage>
                }
            </CartItems>
                <Button onClick={goTocheckOutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;