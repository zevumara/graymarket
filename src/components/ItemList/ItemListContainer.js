// Dependencies
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
// Components
import ItemList from "./ItemList";
// Context
import { BasicContext } from "../../context/BasicContext";

const ItemListContainer = ({ loader }) => {
	const { categoryId } = useParams();
	const [list, setList] = useState([]);
	const basicContext = useContext(BasicContext);

	// Listado de productos Mercado Libre
	const getItemsML = async () => {
		const category = categoryId ? categoryId : "MLA1055";
		const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=9&offset=0`);
		const result = await response.json();
		setList(result.results);
		loader(false);
	};

	// Listado de productos Firestore
	const getItemsFS = async () => {
		const category = categoryId ? categoryId : "electronics";
		const querySnapshot = await collection(getFirestore(), "items");
		const queryFilter = query(querySnapshot, where("categoryId", "==", category));
		const result = await getDocs(queryFilter);
		const items = result.docs.map((item) => {
			return { id: item.id, ...item.data() };
		});
		setList(items);
		loader(false);
	};

	// Buscar productos Firestore
	const searchItemsFS = async () => {
		const querySnapshot = await collection(getFirestore(), "items");
		const result = await getDocs(query(querySnapshot));
		const items = result.docs.map((item) => {
			return { id: item.id, ...item.data() };
		});
		const searchResults = [];
		items.forEach((item) => {
			if (
				item.title.toLowerCase().includes(basicContext.query.toLowerCase()) ||
				item.description.toLowerCase().includes(basicContext.query.toLowerCase())
			) {
				searchResults.push(item);
			}
		});
		setList(searchResults);
		loader(false);
	};

	// Llama a la función cuando se recibe la variable categoryId
	useEffect(() => {
		loader(true);
		getItemsFS();
	}, [categoryId]);

	//
	useEffect(() => {
		loader(true);
		basicContext.query ? searchItemsFS() : getItemsFS();
	}, [basicContext.query]);

	return (
		<main className="album">
			<div className="container-xxl pt-4 pb-3">
				<ItemList list={list} />
			</div>
		</main>
	);
};

export default ItemListContainer;
