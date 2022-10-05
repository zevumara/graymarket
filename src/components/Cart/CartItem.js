// Dependencies
import { useContext } from "react";
// Contexts
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
	const cartContext = useContext(CartContext);

	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
			<div className="ms-2 me-auto">
				<div className="fw-bold">{item.title.split(" ").slice(0, 3).join(" ")}</div>
				<small>${item.price}</small>
			</div>
			<span className="badge bg-primary pill py-3 px-4">{item.quantity}</span>
			<a className="btn border-0 py-2" onClick={() => cartContext.removeItem(item)}>
				<i className="bi bi-cart-dash-fill"></i>
			</a>
		</li>
	);
};

export default CartItem;
