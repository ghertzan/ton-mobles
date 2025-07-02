import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

import { app } from "./config";

const db = getFirestore(app);

/**
 *
 * @returns {Array} con todos los articulos en la base
 */
export const getAllProducts = async () => {
  try {
    const documents = await getDocs(collection(db, "products"));

    const products = [];

    documents.forEach((doc) => {
      products.push({ ...doc.data(), id: doc.id });
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
