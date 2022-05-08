import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PlanetLogo } from "../../assets/planet.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./nav.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropdown } = useContext(CartContext);

  const dropdownHandler = () => {
    if (!isDropdown) {
      return setIsdropdown(true);
    }
    return setIsdropdown(false);
  };
  return (
    <>
      <nav className='navigation'>
        <Link className='logo-container' to='/'>
          <PlanetLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={dropdownHandler} />
        </div>
        {isDropdown && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
