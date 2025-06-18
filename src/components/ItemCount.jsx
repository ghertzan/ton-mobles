import { useState, useContext } from "react";
import { CartContext } from "/src/contexts/CartContext";

function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const maxStock = item?.stock;

  const handleSum = () => {
    if (count < maxStock) {
      setCount(count + 1);
    }
  };
  const handleLess = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };
  const handleAdd = () => {
    addToCart(item, count);
  };

  return (
    <div className="d-flex justify-content-around align-items-center mb-3 mt-3">
      <div>
        <button className="btn btn-primary" onClick={handleSum}>
          {" "}
          +{" "}
        </button>
        <span className="badge bg-primary rounded-pill"> {count} </span>
        <button className="btn btn-primary" onClick={handleLess}>
          {" "}
          -{" "}
        </button>
      </div>
      <button className="btn btn-primary" onClick={handleAdd}>
        {" "}
        Agregar{" "}
      </button>
    </div>
  );
}

export default ItemCount;
