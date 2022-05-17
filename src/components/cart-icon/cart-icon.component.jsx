import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isDropdown, setIsdropdown, cartCount } = useContext(CartContext);

  const toggleIsDropdown = () => setIsdropdown(!isDropdown);
  return (
    <CartIconContainer onClick={toggleIsDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
