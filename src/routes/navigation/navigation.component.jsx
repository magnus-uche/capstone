import react, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { cartsContext } from "../../context/cart.context";
import CardIcon from "../../components/cart-icon/card-icon.component";
import logo from '../../assets/logo.jpg';
import { userContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(cartsContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (<span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>) : (<Link className="nav-link" to="/auth">
            SIGN IN
          </Link>)}
          <CardIcon />
        </div>
      {isCartOpen && <CartDropdown/> }
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
