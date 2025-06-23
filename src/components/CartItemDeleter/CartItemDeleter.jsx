import { useCart } from "../../hooks/useCart";

export default function CartItemDeleter({ item }) {
  const { deleteFromCart } = useCart();

  const handleDelete = () => {
    deleteFromCart(item);
  };

  return (
    <>
      <div>
        <span className=""> {item.qty} </span>
        <button className="btn" onClick={handleDelete}>
          <img src="../src/assets/001-basura.png" alt="delete" />
        </button>
      </div>
    </>
  );
}
