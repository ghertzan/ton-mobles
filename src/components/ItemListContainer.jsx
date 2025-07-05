import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/database";

export default function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		if (categoryName) {
			console.log("hola!");
			getProductsByCategory(categoryName).then((data) => setItems(data));
			console.log(items);
		} else {
			getProducts().then((data) => setItems(data));
		}
	}, [categoryName]);

	console.log(categoryName);
	return (
		<>
			<div className="container row justify-content-evenly mt-5">
				<ItemList items={items} />
			</div>
		</>
	);
}
