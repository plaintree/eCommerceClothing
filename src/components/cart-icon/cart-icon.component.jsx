import { useDispatch, useSelector } from "react-redux";

import {
  selectIsDropdown,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsDropdown } from "../../store/cart/cart.action";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isDropdown = useSelector(selectIsDropdown);
  const cartCount = useSelector(selectCartCount);

  const toggleIsDropdown = () => dispatch(setIsDropdown(!isDropdown));
  return (
    <CartIconContainer onClick={toggleIsDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
