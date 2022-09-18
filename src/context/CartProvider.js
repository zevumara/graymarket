import { useEffect, useState, createContext } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [cartCounter, setCartCounter] = useState(0);

	const isInCart = (item) => {
		return cart.find((product) => product.id === item.id);
	};

	const addItem = (item, quantity) => {
		const cartItem = isInCart(item);
		cartItem ? (cartItem.quantity += quantity) : setCart([...cart, { ...item, quantity }]);
	};

	const removeItem = (item) => {
		const cartItem = isInCart(item);
		if (cartItem && cartItem.quantity <= 1) {
			let index = cart.indexOf(cartItem);
			let newCart = cart;
			setCart(newCart.splice(index, 1));
		} else {
			cartItem.quantity--;
		}
	};

	const clear = () => {
		setCart([]);
	};

	// Debug

	useEffect(() => {
		console.log(cart);
	}, [cart]);

	return <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};

export default CartProvider;
