import { useContext } from "react";
import { CartContext } from "/src/contexts/CartContext";
import CartDetailItem from "./CartDetailItem";

export default function CartDetail() {
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((item) => (
        <CartDetailItem item={item} />
      ))}
    </>
  );
}
