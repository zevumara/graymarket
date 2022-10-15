// Dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
// Components
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ loader }) => {
	const { itemId } = useParams();
	const [item, setItem] = useState([]);

	// Item de Mercado Libre
	const getItemML = async () => {
		const response = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
		const result = await response.json();
		setItem(result);
		loader(false);
	};

	// Item de Firestore
	const getItemFS = async () => {
		const query = await doc(getFirestore(), "items", itemId);
		const result = await getDoc(query);
		setItem({ id: result.id, ...result.data() });
		loader(false);
	};

	// Llama a la función cuando se recibe la variable itemId
	useEffect(() => {
		loader(true);
		//getItemML();
		getItemFS();
	}, [itemId]);

	return (
		<main className="album">
			<div className="container-xxl pt-4 pb-3">
				<ItemDetail key={item.id} item={item} />
			</div>
		</main>
	);
};

export default ItemDetailContainer;
