// Dependencies
import { useContext } from "react";
// Contexts
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
	const cartContext = useContext(CartContext);

	return (
		<span
			id="contador"
			className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${
				cartContext.counter < 1 && "d-none"
			}`}
		>
			{cartContext.counter}
		</span>
	);
};

export default CartWidget;
