import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
	const [cantidadState, setCantidadState] = useState(initial);

	const sumar = () => {
		const cantidad = cantidadState;
		if (cantidad < stock) {
			setCantidadState(cantidadState + 1);
		}
	};

	const restar = () => {
		const cantidad = cantidadState;
		if (cantidad > 1) {
			setCantidadState(cantidadState - 1);
		}
	};

	const handleChange = () => {
		setCantidadState(cantidadState);
	};

	return (
		<div className="input-group mb-3 mx-auto" style={{ maxWidth: "150px" }}>
			<button id="restar" className="btn btn-primary" type="button" onClick={restar}>
				<i className="bi bi-dash"></i>
			</button>
			<input type="text" className="form-control text-center" onChange={handleChange} value={cantidadState} />
			<button className="btn btn-primary" type="button" onClick={sumar}>
				<i className="bi bi-plus"></i>
			</button>
		</div>
	);
};

export default ItemCount;
