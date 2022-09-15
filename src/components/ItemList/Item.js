// Dependencies
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, descripcion }) => {
	let img = "https://http2.mlstatic.com/D_604790-" + imagen + "-V.webp";
	return (
		<div className="col-md-4">
			<div className="card">
				<Link to={"/item/" + id}>
					<img src={img} className="card-img-top" alt="Smartphone" />
				</Link>
				<div className="card-body">
					<h5 className="card-title" style={{ minHeight: "52px" }}>{nombre}</h5>
					<p className="card-text text-secondary" style={{ minHeight: "72px" }}>
						<small>{descripcion}</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
