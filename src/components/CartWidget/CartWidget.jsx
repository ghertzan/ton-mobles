import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router";
import styles from "../CartWidget/cartWidget.module.css";

function CartWidget() {
  const { getCartQty } = useCart();

  return (
    <>
      <div>
        <NavLink to={"/cart/cartDetail"}>
          <img
            src="../src/assets/carrito.webp"
            alt="carrito"
            style={{ width: 24, height: 24 }}
          />
          <span className={`${styles.count} badge rounded-pill m-1`}>
            {getCartQty()}
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default CartWidget;
