/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);

  const OpenCartFunction = () => {
    setOpenCart(true);
  };

  const CloseCartFunction = () => {
    setOpenCart(false);
  };

  const value = {
    OpenCartFunction,
    CloseCartFunction,
    openCart,
    setOpenCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
