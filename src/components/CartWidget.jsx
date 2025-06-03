function CartWidget() {
  return (
    <>
      <div>
        <img
          src="./src/assets/carrito.webp"
          alt="carrito"
          style={{ width: 24, height: 24 }}
        />
        <span className="badge bg-primary rounded-pill m-1">4</span>
      </div>
    </>
  );
}

export default CartWidget;
