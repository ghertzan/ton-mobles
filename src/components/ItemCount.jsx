import { useState } from "react";
import { useCart } from "../hooks/useCart";
function ItemCount({ item }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleSum = () => setQty(qty + 1);

  const handleRest = () => {
    if (qty >= 2) {
      setQty(qty - 1);
    }
  };

  const handleAdd = () => {
    addToCart({ ...item, qty });
  };

  return (
    <div className="d-flex justify-content-around align-items-center mb-3 mt-3">
      <div>
        <button className="btn btn-primary" onClick={handleSum}>
          {" "}
          +{" "}
        </button>
        <span className="badge bg-primary rounded-pill"> {qty} </span>
        <button className="btn btn-primary" onClick={handleRest}>
          {" "}
          -{" "}
        </button>
      </div>
      <div>
        <button className="btn btn-primary" onClick={handleAdd}>
          {" "}
          Agregar{" "}
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
