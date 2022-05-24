import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  setIsdropdown: () => {},
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartItems: [],
  isDropdown: false,
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  cartItems: [],
  isDropdown: false,
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_DROPDOWN: "SET_IS_DROPDOWN",
};

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

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return { ...state, ...payload };
    case "SET_IS_DROPDOWN":
      return { ...state, isDropdown: payload };
    default:
      throw new Error(`Invalid type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { cartItems, cartCount, cartTotal, isDropdown } = state;

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };
  const subtractItemFromCart = (cartItemToSubtract) => {
    const newCartItems = subtractCartItem(cartItems, cartItemToSubtract);
    updateCartItemReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItemReducer(newCartItems);
  };

  const setIsdropdown = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_DROPDOWN, bool));
  };
  const value = {
    isDropdown,
    setIsdropdown,
    addItemToCart,
    subtractItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
