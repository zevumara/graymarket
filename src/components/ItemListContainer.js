import ItemCount from "./ItemCount";
import Productos from "../data/Productos";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
	const [listaProductos, setListaProductos] = useState([]);

	// Llama a la función apenas de monta el componente
	useEffect(() => {
		listadoProductos.then((response) => {
			setListaProductos(response);
		});
	}, []);

	// Devuelve el listado luego de 2 segundos
	const listadoProductos = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Productos);
		}, 2000);
	});

	//return <ItemCount stock={5} initial={1} />;
	return (
		<>
			<ItemList lista={listaProductos} />
		</>
	);
};

export default ItemListContainer;
