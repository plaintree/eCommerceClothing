import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const subtractCartItem = (cartItems, cartItemToSubtract) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToSubtract.id
  );

  if (existCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToSubtract.id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToSubtract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  cartItems.find((cartItem) => cartItem.id === cartItemToClear.id);

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const setIsDropdown = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_DROPDOWN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const subtractItemFromCart = (cartItems, cartItemToSubtract) => {
  const newCartItems = subtractCartItem(cartItems, cartItemToSubtract);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
