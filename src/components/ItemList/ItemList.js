// Dependencies
import { useEffect } from "react";
// Components
import Item from "./Item";

const ItemList = ({ lista }) => {
	/*
	// Probando lógica para entender el funcionamiento de los ciclos
	useEffect(() => {
		console.log("Cargando...");
	}, []);
	useEffect(() => {
		lista.length > 0 && console.log("Carga completa.");
	}, [lista]);
	*/

	return (
		<div id="container" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			{lista.map((item) => (
				<Item key={item.id} id={item.id} nombre={item.title.split(' ').slice(0, 3).join(' ')} precio={item.price} imagen={item.thumbnail_id} descripcion={item.title} />
			))}
		</div>
	);
};

export default ItemList;
