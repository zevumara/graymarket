// Dependenciesx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import ItemList from "./ItemList";

const ItemListContainer = ({ loader }) => {
	const { categoryId } = useParams();
	const [list, setList] = useState([]);

	// Listado de productos
	const getProducts = async () => {
		const category = categoryId ? categoryId : 'MLA1055';
		const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${category}&limit=9&offset=0`);
		const result = await response.json();
		setList(result.results);
		loader(false);
	};

	// Llama a la función cuando se recibe la variable categoryId
	useEffect(() => {
		loader(true);
		getProducts();
	}, [categoryId]);

	return (
		<main className="album">
			<div className="container-xxl pt-4 pb-3">
				<ItemList lista={list} />
			</div>
		</main>
	);
};

export default ItemListContainer;
