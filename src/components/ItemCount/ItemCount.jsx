import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { Slide, ToastContainer, toast } from "react-toastify";

import styles from "../ItemCount/itemCount.module.css";

function ItemCount({ item }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleSum = () => {
    if (qty < item.stock) {
      setQty(qty + 1);
    } else {
      toast.warn("Stock máximo alcanzado");
    }
  };

  const handleRest = () => {
    if (qty >= 2) {
      setQty(qty - 1);
    }
  };

  const handleAdd = () => {
    addToCart({ ...item, qty });
    toast.success("Agregado");
  };

  return (
    <div className="d-flex justify-content-around align-items-center mb-3 mt-3">
      <div>
        <button
          className={`${styles.btnGh} btn btn-primary`}
          onClick={handleSum}
        >
          +{" "}
        </button>
        <span className={`${styles.count} badge`}> {qty} </span>
        <button
          className={`${styles.btnGh} btn btn-primary`}
          onClick={handleRest}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <div>
        <button className="btn" onClick={handleAdd}>
          <img src="../src/assets/002-boton-mas.png" alt="" srcset="" />
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
