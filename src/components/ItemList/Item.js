// Dependencies
import { Link } from "react-router-dom";

const Item = ({ id, nombre, imagen, precio, descripcion }) => {
	return (
		<div className="col-md-4">
			<div className="card">
				<Link to={"/item/" + id}>
					<img src={`../graymarket/img/${imagen}`} className="card-img-top" alt="Smartphone" />
				</Link>
				<div className="card-body">
					<h5 className="card-title" style={{ minHeight: "52px" }}>
						{nombre}
					</h5>
					<p className="card-text text-secondary">
						<small>{descripcion}</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
