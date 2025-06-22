import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router";

export default function ItemDetail({ item }) {
  return (
    <div className="d-flex flex justify-content-around">
      <div className="card m-3" style={{ width: "23rem" }}>
        <span className="badge bg-success">
          {item?.discountPercentage} % OFF
        </span>
        <img
          src={item?.thumbnail}
          className="card-img-top"
          alt={item?.title}
        ></img>

        <div className="card-body">
          <h5 className="card-title">{item?.title}</h5>
          <p className="card-text">{item?.description}</p>
          <p className="card-text fs-3">
            {" "}
            ${" "}
            {Number.parseFloat(
              (item?.price * (100 - item?.discountPercentage)) / 100
            ).toFixed(2)}
          </p>
          <p className="card-text fs-6">
            {" "}
            <del className="">$ {item?.price}</del>
          </p>
          <NavLink to={"/"} className={"btn btn-primary"}>
            {" "}
            Volver{" "}
          </NavLink>
          <ItemCount item={item} />
        </div>
      </div>
    </div>
  );
}
