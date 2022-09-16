// Dependencies
import { useState } from "react";
import { NavLink } from "react-router-dom";
// Components
import ItemCount from "./ItemCount";

const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {
	const [count, setCount] = useState(0);

	return (
		<div className="card">
			<img
				src={"https://http2.mlstatic.com/D_604790-" + imagen + "-V.webp"}
				className="card-img-top"
				alt="Smartphone"
				style={{ width: "60%", margin: "auto" }}
			/>
			<div className="card-body">
				<h5 className="card-title" style={{ minHeight: "52px" }}>
					{nombre}
				</h5>
				<p className="card-text text-secondary" style={{ minHeight: "72px" }}>
					<small>{descripcion}</small>
				</p>
				<ItemCount count={count} setCount={setCount} stock={10} />
				<div className="input-group justify-content-center">
					<span className="input-group-text">$ {precio}</span>
					<NavLink to={"/cart"} className="btn btn-primary">
						<i className="bi bi-cart-plus me-2"></i>Buy
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
