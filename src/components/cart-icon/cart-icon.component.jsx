import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isDropdown, setIsdropdown, cartCount } = useContext(CartContext);

  const toggleIsDropdown = () => setIsdropdown(!isDropdown);
  return (
    <div className='cart-icon-container' onClick={toggleIsDropdown}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
