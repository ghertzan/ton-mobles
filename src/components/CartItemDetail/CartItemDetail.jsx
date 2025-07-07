import CartItemDeleter from "../CartItemDeleter/CartItemDeleter";
import ItemCount from "../ItemCount/ItemCount";

export default function CartItemDetail({ cartItem }) {
	return (
		<>
			<li className="list-group-item d-flex justify-content-between align-items-start mt-1">
				<div className="ms-2 me-auto">
					<div className="fw-bold">{cartItem.title}</div>$ {cartItem.price}
				</div>
				<span className="badge bg-primary rounded-pill">{cartItem.qty}</span>
				<span>
					<CartItemDeleter item={cartItem} />
				</span>
			</li>
		</>
	);
}
