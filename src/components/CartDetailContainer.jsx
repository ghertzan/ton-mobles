import CartDetail from "./CartDetail";
import CartResumen from "./CartResumen";

export default function CartDetailContainer() {
  return (
    <div className="container">
      <CartDetail />
      <CartResumen />
    </div>
  );
}
