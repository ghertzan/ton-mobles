const URL = "http://localhost:8080";
/**
 *
 * @returns {Array} con todos los articulos en la base
 */
export const getAllProducts = async () => {
	try {
		const result = await fetch(`${URL}/api/products/`);
		const data = await result.json();

		const products = [];

		data.payload.forEach((prod) => {
			products.push({ id: prod._id, ...prod });
		});
		return products;
	} catch (error) {
		console.error(error);
	}
};
/**
 *
 * @param {string} id identificador del articulo
 * @returns {object} objeto que contiene la información del producto y su identificador
 */
export const getProduct = async (id) => {
	const docRef = doc(db, "products", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists) {
		return { ...docSnap.data(), id: docRef.id };
	} else {
		return null;
	}
};

/**
 *
 * @param {string} category
 * @returns {Array} con los productos en la base según la categoria
 */
export const getProductsByCategory = async (category) => {
	const products = [];
	const q = query(
		collection(db, "products"),
		where("category", "==", category)
	);
	const docs = await getDocs(q);
	docs.forEach((doc) => {
		products.push({ ...doc.data(), id: doc.id });
	});
	return products;
};
