import { app } from "./config";
import { getFirestore, collection, getDocs, where } from "firebase/firestore";

const db = getFirestore(app);

export async function getProducts() {
	const products = [];

	try {
		const docs = await getDocs(collection(db, "products"));
		docs.forEach((doc) => {
			products.push({ ...doc.data(), id: doc.id });
		});
		return products;
	} catch (error) {
		return error.toString();
	}
}

export async function getProductsByCategory(category) {
	const products = [];
	try {
		const docs = await getDocs(
			collection(db, "products"),
			where("category", "==", category)
		);
		docs.forEach((doc) => {
			products.push({ ...doc.data(), id: doc.id });
		});
		return products;
	} catch (error) {
		return error.toString();
	}
}

export function getCategories() {
	const catagories = [];
	getProducts().then((data) => {
		data.forEach((e) => {
			const exist = catagories.some((el) => el.name == e.category);
			if (!exist) {
				catagories.push({ name: e.category });
			}
		});
	});

	return catagories;
}
