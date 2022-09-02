import Item from "./Item";
import { useEffect } from "react";

const ItemList = ({ lista }) => {
	// Probando lógica para entender el funcionamiento de los ciclos
	useEffect(() => {
		console.log("Cargando...");
	}, []);
	useEffect(() => {
		lista.length > 0 && console.log("Carga completa.");
	}, [lista]);

	return (
		<>
			{lista.map((producto) => (
				<Item key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
			))}
		</>
	);
};

export default ItemList;
