// Dependencies
import { useContext, useEffect } from "react";
// Components
import CartItem from "./CartItem";
// Contexts
import { CartContext } from "../../context/CartContext";

const CartItemList = () => {
	const cartContext = useContext(CartContext);

	if (cartContext.counter > 0) {
		return (
			<>
				<ul id="items" className="list-group">
					{cartContext.cart.map((item) => (
						<CartItem key={item.id} item={item} />
					))}
				</ul>
				<div id="total">
					<hr className="my-4" />
					<div className="d-flex justify-content-between mb-4">
						<h5 className="text-secondary">Total</h5>
						<h5> $ {cartContext.total}</h5>
					</div>
					<button id="comprar" className="btn btn-primary w-100 py-2" onClick={() => cartContext.clear()}>
						<i className="bi bi-cart-check-fill me-1"></i> Finalizar compra
					</button>
				</div>
			</>
		);
	} else {
		return (
			<ul id="items" className="list-group">
				<p>There are no items in the cart.</p>
			</ul>
		);
	}
};

export default CartItemList;
