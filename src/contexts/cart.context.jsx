import { createContext, useState } from "react";

export const CartContext = createContext({
  isDropdown: false,
  setIsdropdown: () => {},
});

export const CartProvider = ({ children }) => {
  const [isDropdown, setIsdropdown] = useState(false);
  const value = { isDropdown, setIsdropdown };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
