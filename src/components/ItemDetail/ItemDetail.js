// Dependencies
import { useState, useContext } from "react";
// Components
import ItemCount from "./ItemCount";
// Contexts
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, title, price, image, description }) => {
	const [quantity, setQuantity] = useState(1);
	const cartContext = useContext(CartContext);

	return (
		<div className="card">
			<img src={`../graymarket/img/${image}`} className="card-img-top" alt="Product" style={{ width: "40%", margin: "auto" }} />
			<div className="card-body">
				<h5 className="card-title" style={{ minHeight: "52px" }}>
					{title}
				</h5>
				<p className="card-text text-secondary" style={{ minHeight: "72px" }}>
					<small>{description}</small>
				</p>
				<ItemCount count={quantity} setCount={setQuantity} stock={10} />
				<div className="input-group justify-content-center">
					<span className="input-group-text">$ {price}</span>
					<a onClick={() => cartContext.addItem({ id, title, price, image, description }, quantity)} className="btn btn-primary">
						<i className="bi bi-cart-plus me-2"></i>Buy
					</a>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;
