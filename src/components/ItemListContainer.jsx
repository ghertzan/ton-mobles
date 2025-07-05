import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/database";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    if(categoryName){
      getProductsByCategory(categoryName).then( data => setItems(data))
    }else{
      getProducts().then(data => setItems(data)
    );
    }
  }, [categoryName]);

  return (
    <>
      <div className="container row justify-content-evenly mt-5">
        <ItemList items={items} />
      </div>
    </>
  );
}
