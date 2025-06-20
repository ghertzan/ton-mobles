import { useCart } from "../hooks/useCart";
import CartItemDetail from "./CartItemDetail";

export default function CartDetailContainer() {
  const { cart } = useCart();

  return (
    <>
      <div className="container m-3 col-lg-12 g-3">
        <div className="row">
          <div className="col-lg-8">
            {cart.map((cartItem) => (
              <CartItemDetail cartItem={cartItem}></CartItemDetail>
            ))}
          </div>

          <div className="col-lg-4">Resumen de pago</div>
        </div>
      </div>
    </>
  );
}
