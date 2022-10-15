// Dependencies
import { useContext, useEffect } from "react";
// Components
import Item from "./Item";
import Message from "../Message/Message";
import { BasicContext } from "../../context/BasicContext";

const ItemList = ({ list }) => {
	const basicContext = useContext(BasicContext);
	/*
	// Probando lógica para entender el funcionamiento de los ciclos
	useEffect(() => {
		console.log("Cargando...");
	}, []);
	useEffect(() => {
		lista.length > 0 && console.log("Carga completa.");
	}, [list]);
	*/

	return (
		<>
			{list.length < 1 && basicContext.query && <Message type="warning" content="No search results found." />}
			<div id="container" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{list.map((item) => (
					<Item key={item.id} item={item} />
				))}
			</div>
		</>
	);
};

export default ItemList;
