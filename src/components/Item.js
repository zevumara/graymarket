const Item = ({ nombre, imagen, precio }) => {
	return (
		<div>
			<img width={"200px"} src={imagen} alt={nombre} />
			<h2>{nombre}</h2>
			<p>$ {precio}</p>
			<p><button>Ver mas</button></p>
		</div>
	);
};

export default Item;
