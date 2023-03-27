import react, {useContext} from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { cartsContext } from '../../context/cart.context'

const CartDropdown = () =>{
    const {cartItems} = useContext(cartsContext)

    return(
       <div className="cart-dropdown-container">
        <div className="cart-items">
        {cartItems.map((item)=>{
        return (
            <CartItem key={item.id} cartItem={item} />
        )
        })}
        </div>
        <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;