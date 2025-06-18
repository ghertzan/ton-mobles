import { useContext } from "react";
import { CartContext } from "/src/contexts/CartContext";
import { NavLink } from "react-router";

function CartWidget() {
  const { getCartQty } = useContext(CartContext);

  return (
    <>
      <div>
        <NavLink to={`/cart/cartdetail/`}>
          <img
            src="/src/assets/carrito.webp"
            alt="carrito"
            style={{ width: 24, height: 24 }}
          />
          <span className="badge bg-primary rounded-pill m-1">
            {" "}
            {getCartQty()}{" "}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default CartWidget;
