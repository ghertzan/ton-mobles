import { useCart } from "../../hooks/useCart";
import CartItemDetail from "../CartItemDetail/CartItemDetail";
import Payment from "../Payment/Payment";

export default function CartDetailContainer() {
	const { cart } = useCart();

	return (
		<>
			<div className="container-fluid mt-3 col-lg-12 g-3">
				<div className="row">
					<div>
						<ol className="list-group list-group-numbered">
							{cart.map((cartItem) => (
								<CartItemDetail
									key={cartItem.id}
									cartItem={cartItem}></CartItemDetail>
							))}
						</ol>
					</div>
				</div>
			</div>
			<Payment />
		</>
	);
}
