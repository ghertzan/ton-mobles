import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";

import { getAllProducts, getProductsByCategory } from "../../database/db";

export default function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		if (categoryName) {
			getProductsByCategory(categoryName).then((e) => {
				setItems(e);
			});
		} else {
			getAllProducts().then((e) => {
				setItems(e);
			});
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
