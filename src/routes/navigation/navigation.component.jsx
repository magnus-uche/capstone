import react, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { cartsContext } from "../../context/cart.context";
import CardIcon from "../../components/cart-icon/card-icon.component";
import logo from '../../assets/logo.jpg';
// import { userContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink
 } from "./navigation.styles";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(cartsContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (<NavLink  as='span' onClick={signOutUser}>
            SIGN OUT
          </NavLink>) : (<NavLink to="/auth">
            SIGN IN
          </NavLink>)}
          <CardIcon />
        </NavLinksContainer>
      {isCartOpen && <CartDropdown/> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
