import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../database/db";

export default function ItemDetailContainer() {
  const [item, setItem] = useState();
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((e) => setItem(e));
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
}
