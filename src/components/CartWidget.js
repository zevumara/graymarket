export const CartWidget = () => {
	return (
		<button
			class="btn btn-primary px-5 position-relative"
			type="button"
			data-bs-toggle="offcanvas"
			data-bs-target="#carrito"
			aria-controls="carrito"
		>
			<i class="bi bi-cart-fill"></i>
			<span id="contador" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
				1
			</span>
		</button>
	);
};

export default CartWidget;
