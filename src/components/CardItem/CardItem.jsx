import { NavLink } from "react-router";

export default function CardItem({ item }) {
  return (
    <div
      key={item.id}
      className="card m-1 p-0 col-1 align-items-center border border-bg-danger-subtle"
      style={{ width: "18rem" }}
    >
      <img
        src={item.thumbnail}
        className="card-img-top"
        alt={item.description}
      ></img>
      <div className="card-body">
        <h5 className="card-title"> {item.title}</h5>
        <h5 className="card-title text-muted"> $ {item.price}</h5>
      </div>
      <NavLink to={`/item/${item.id}`} className="btn btn-primary w-50 mb-1">
        Ver más
      </NavLink>
    </div>
  );
}
