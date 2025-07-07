import { useCart } from "../../hooks/useCart";

export default function CartItemDeleter({ item }) {
	const { deleteFromCart } = useCart();

	const handleDelete = () => {
		deleteFromCart(item);
	};

	return (
		<>
			<button onClick={handleDelete} className="btn">
				<img src="../src/assets/001-basura.png" alt="delete" />
			</button>
		</>
	);
}
