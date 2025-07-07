import { useCart } from "../../hooks/useCart";
import { toast } from "react-toastify";

export default function CartItemDeleter({ item }) {
	const { deleteFromCart } = useCart();

	const handleDelete = () => {
		deleteFromCart(item);
		toast.info("Eliminado...");
	};

	return (
		<>
			<button onClick={handleDelete} className="btn">
				<img src="../src/assets/001-basura.png" alt="delete" />
			</button>
		</>
	);
}
