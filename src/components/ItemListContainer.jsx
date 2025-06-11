import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

import { withLoader } from "../hoc/withLoader";

const ItemListWithLoader = withLoader(ItemList);

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if (categoryName) {
      fetch(`https://dummyjson.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((data) => setItems(data.products));
    } else {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setItems(data.products));
    }
  }, [categoryName]);

  return (
    <>
      <div className="container row justify-content-evenly mt-5">
        <ItemListWithLoader items={items} />
      </div>
    </>
  );
}
