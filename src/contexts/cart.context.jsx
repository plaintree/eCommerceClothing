import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isDropdown: false,
  setIsdropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  subtractItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

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
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToClear.id
  );

  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartProvider = ({ children }) => {
  const [isDropdown, setIsdropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const subtractItemFromCart = (cartItemToSubtract) => {
    setCartItems(subtractCartItem(cartItems, cartItemToSubtract));
  };
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
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
