import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [counter, setCounter] = useState(0);
	const [total, setTotal] = useState(0);

	const isInCart = (item) => {
		return cart.find((product) => product.id === item.id);
	};

	const addItem = (item, quantity) => {
		const cartItem = isInCart(item);
		cartItem ? (cartItem.quantity += quantity) : setCart([...cart, { ...item, quantity }]);
		setTotal((total) => total + item.price * quantity);
		setCounter((counter) => counter + quantity);
	};

	const removeItem = (item) => {
		const cartItem = isInCart(item);
		if (cartItem && cartItem.quantity <= 1) {
			setCart(cart.filter((product) => product.id !== item.id));
		} else {
			cartItem.quantity--;
		}
		setTotal((total) => total - item.price);
		counter > 0 && setCounter((counter) => counter - 1);
	};

	const clear = () => {
		setTotal(0);
		setCart([]);
		counter !== 0 && setCounter(0);
	};

	useEffect(() => {
		if (counter < 1) {
			clear();
		}
	}, [counter]);

	return <CartContext.Provider value={{ cart, counter, total, addItem, removeItem, clear }}>{children}</CartContext.Provider>;
};

export default CartProvider;
