import { CartContext } from "/src/contexts/CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    const exist = cart.some((e) => e.id == item.id);
    if (!exist) {
      setCart([...cart, { ...item, cartQty: qty }]);
    } else {
      cart.forEach((e) => {
        if (e.id == item.id) {
          e.cartQty = e.cartQty + qty;
        }
      });
    }
  };

  const getCartQty = () => {
    return cart.reduce((acc, curr) => (acc += curr.cartQty), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getCartQty }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
