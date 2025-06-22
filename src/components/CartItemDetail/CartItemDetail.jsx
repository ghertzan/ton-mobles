import CartItemDeleter from "../CartItemDeleter/CartItemDeleter";
import ItemCount from "../ItemCount/ItemCount";

export default function CartItemDetail({ cartItem }) {
  return (
    <>
      <div className="card mt-1" key={cartItem.id}>
        <div className="card-header">{cartItem.title}</div>
        <div className="card-body row">
          <div className="d-flex col-lg-12">
            <img className="col-4" src={cartItem.thumbnail} />
            <div className="col-8">
              <p className="text-muted">Marca: {cartItem.brand}</p>
              <p className="text-muted">Garantía: {cartItem.returnPolicy}</p>
              <ItemCount item={cartItem} />
              <CartItemDeleter item={cartItem} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
