import { useCart } from "../../hooks/useCart";

export default function Payment() {
	const { getCartTotal, getCartTotalDiscounts } = useCart();

	const subTotal = getCartTotal();
	const discount = getCartTotalDiscounts();
	const totalDiscount = (subTotal * discount) / 100;
	const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	const handleEmail = (event) => {
		console.log(regexEmail.test(event.currentTarget.value));
	};

	return (
		<form>
			<div className="row mt-3 card p-3 bg-light bg-opacity-10 flex-row">
				<div className="col-lg-9">
					<div>
						<h6>Tus datos</h6>
						<div className="m-1">
							<label className="form-label">Nombre</label>
							<input
								type="text"
								className="form-control"
								placeholder="Cómo queres que te llamemos"
								required
							/>
						</div>
					</div>
					<div className="m-1">
						<label className="form-label">Email</label>
						<input
							type="text"
							className="form-control"
							placeholder=""
							required
							onSubmit={handleEmail}
						/>
					</div>
					<div className="m-1">
						<label className="form-label">Telefono</label>
						<input
							type="text"
							className="form-control w-75"
							placeholder=""
							required
						/>
					</div>
					<hr />
					<div className="mt-3">
						<h6 className="card-title">Tarjeta de Crédito</h6>
						<div className="row p-2">
							<div className="mt-1">
								<label className="form-label">Número de la tarjeta</label>
								<input
									type="text"
									className="form-control"
									placeholder="Como figura en el plástico"
									required
								/>
							</div>
							<div className="row mt-2">
								<div className="col-lg-6">
									<div className="mb-3">
										<label className="form-label">Nombre titular</label>
										<input
											type="text"
											className="form-control"
											placeholder="Cómo figura en la tarjeta"
											required
										/>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="mb-3">
										<label className="form-label">Vencimiento</label>
										<input
											type="text"
											className="form-control"
											required
											placeholder="MM/AA"
										/>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="mb-3">
										<label className="form-label">CVV</label>
										<input type="text" className="form-control" required />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card col-lg-3 p-3 bg-light bg-opacity-10">
					<div>
						<h6 className="cart-title">Resumen de Compra</h6>
						<div className="d-flex justify-content-between mb-1 small">
							<span>Subtotal:</span>
							<span>$ {subTotal}</span>
						</div>
					</div>
					<div className="d-flex justify-content-between mb-1 small">
						<span>Descuentos:</span>
						<span>$ -{totalDiscount}</span>
					</div>
					<hr />
					<div className="d-flex justify-content-between mb-1 small">
						<span>TOTAL:</span>
						<strong>$ {subTotal - totalDiscount}</strong>
					</div>
					<button className="btn btn-primary mt-auto">Pagar</button>
				</div>
			</div>
		</form>
	);
}
