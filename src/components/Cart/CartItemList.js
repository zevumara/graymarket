// Dependencies
import { useContext } from "react";
import { Link } from "react-router-dom";
// Components
import CartItem from "./CartItem";
// Contexts
import { CartContext } from "../../context/CartContext";
import { BasicContext } from "../../context/BasicContext";

const CartItemList = () => {
	const cartContext = useContext(CartContext);
	const basicContext = useContext(BasicContext);

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
						<h5> ${cartContext.total}</h5>
					</div>
					<Link to="/checkout">
						<button
							id="comprar"
							className="btn btn-primary w-100 py-2"
							data-bs-dismiss="offcanvas"
							data-bs-target="#carrito"
							onClick={() => {
								window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
								basicContext.clearSearch();
							}}
						>
							<i className="bi bi-cart-check-fill me-1"></i> Checkout
						</button>
					</Link>
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
