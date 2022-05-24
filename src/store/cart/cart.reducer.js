import { CART_ACTION_TYPES } from "./cart.types";
const INITIAL_STATE = {
  cartItems: [],
  isDropdown: false,
};
export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_IS_DROPDOWN:
      return { ...state, isDropdown: payload };
    default:
      return state;
  }
};
