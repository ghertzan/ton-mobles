import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isEmpty = () => {
    return cart.length == 0 ? true : false;
  };

  // retorna -1 si el item no está en el carrito o la posición en el mismo
  const isInCart = (item) => {
    return cart.indexOf(item);
  };
  const addToCart = (item, qty) => {
    if (isInCart == -1) {
      setCart(cart.push(item));
    }
  };

  return (
    <CartContextProvider values={{ cart, isEmpty, isInCart, addToCart }}>
      {children}
    </CartContextProvider>
  );
};

export default CartContextProvider;
