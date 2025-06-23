import { CartContext } from "../contexts/CartContext";
import { useState } from "react";

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (cartItem) => {
    const exist = cart.some((e) => e.id === cartItem.id);
    if (!exist) {
      setCart([...cart, cartItem]);
    } else {
      cart.forEach((e) => {
        if (e.id === cartItem.id) {
          e.qty += cartItem.qty;
        }
      });
    }
  };

  const deleteFromCart = (cartItem) => {
    setCart(cart.filter((item) => item.id != cartItem.id));
  };

  const getCartQty = () => {
    return cart.reduce((acc, curr) => (acc += curr.qty), 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getCartQty, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
