// Dependencies
import { useContext, useState, useEffect } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
// Components
import Message from "../Message/Message";
// Contexts
import { CartContext } from "../../context/CartContext";

const Checkout = ({ loader }) => {
	const cartContext = useContext(CartContext);
	const [message, setMessage] = useState({
		type: "success",
		content: "",
	});
	// Contenido del form
	const [data, setData] = useState({
		first_name: "John",
		last_name: "Doe",
		address: "Back Street Boys",
		card_cvv: 777,
		card_exp: "04/27",
		card_name: "JOHN DOE",
		card_number: "0000 0000 0000 0000",
		country: "Argentina",
		email: "john@doe.com",
		first_name: "John",
		last_name: "Doe",
		state: "Buenos Aires",
		zip_code: 2000,
	});
	// Inputs controlados
	const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};
	// Enviar formulario
	const sendOrder = (event) => {
		event.preventDefault();
		loader(true);
		createOrder();
	};
	// Enviar formulario
	const applyPromo = (event) => {
		event.preventDefault();
		// check input y si existe en el carrito, si es correcto y no existe:
		const promoItem = {
			id: 777,
			title: "Promo code",
			description: "CODERHOUSE",
			image: "",
			price: 5000,
		};
		cartContext.addItem(promoItem, 1);
	};
	// Crear orden en Firestore
	const createOrder = async () => {
		const order = { data, items: cartContext.cart, total: cartContext.total };
		const query = collection(getFirestore(), "orders");
		await addDoc(query, order)
			.then(({ id }) => {
				setMessage({
					type: "success",
					content: `Your order was uploaded successfully (order id: ${id}). This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.`,
				});
				cartContext.clear();
			})
			.catch((error) => {
				setMessage({
					type: "danger",
					content:
						"It looks something went wrong, please try again. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
				});
			});
		loader(false);
	};
	// Mensaje default cuando no hay productos en el carrito
	useEffect(() => {
		if (!cartContext.cart.length && message.content == "") {
			setMessage({
				type: "warning",
				content:
					"It looks there is no  products in your cart. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
			});
		}
	}, [cartContext.cart]);

	return (
		<main className="album">
			<div className="container-xxl pt-4 pb-3">
				{!cartContext.cart.length ? (
					<Message type={message.type} content={message.content} />
				) : (
					<div className="row">
						<div className="col-md-4 order-md-2 mb-4">
							<h4 className="d-flex justify-content-between align-items-center mb-3">
								<span className="text-muted">Your cart</span>
								<span className="badge badge-secondary badge-pill">3</span>
							</h4>
							<ul className="list-group mb-3">
								{cartContext.cart.map((item) => (
									<li
										key={item.id}
										className={`list-group-item d-flex justify-content-between lh-condensed ${item.id == 777 && "bg-light"}`}
									>
										<div>
											<h6 className={`my-0 ${item.id == 777 && "text-success"}`}>
												<span className={`badge bg-primary me-2 ${item.id == 777 && "d-none"}`}>{item.quantity}</span>
												{item.title}
											</h6>
											<small className={`${item.id == 777 ? "text-success" : "text-muted"}`}>{item.description}</small>
										</div>
										<span className={`${item.id == 777 ? "text-success" : "text-muted"}`}>
											{item.id == 777 && "-"} ${item.price}
										</span>
									</li>
								))}
								<li className="list-group-item d-flex justify-content-between">
									<span>Total</span>
									<strong>${cartContext.total}</strong>
								</li>
							</ul>
							<form className="card p-2" onSubmit={applyPromo}>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Promo code" defaultValue={"CODERHOUSE"} />
									<button type="submit" className="btn btn-secondary">
										Redeem
									</button>
								</div>
							</form>
						</div>

						<div className="col-md-8 order-md-1">
							<h4 className="mb-3">Billing address</h4>
							<form className="needs-validation" onSubmit={sendOrder}>
								<div className="row">
									<div className="col-md-6 mb-3">
										<label htmlFor="firstName">First name</label>
										<input
											name="first_name"
											type="text"
											className="form-control"
											id="firstName"
											placeholder=""
											required
											defaultValue={"John"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Valid first name is required.</div>
									</div>
									<div className="col-md-6 mb-3">
										<label htmlFor="lastName">Last name</label>
										<input
											name="last_name"
											type="text"
											className="form-control"
											id="lastName"
											placeholder=""
											required
											defaultValue={"Doe"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Valid last name is required.</div>
									</div>
								</div>

								<div className="mb-3">
									<label htmlFor="email">Email</label>
									<input
										name="email"
										type="email"
										className="form-control"
										id="email"
										placeholder="you@example.com"
										defaultValue={"john@doe.com"}
										onChange={handleChange}
										required
									/>
									<div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
								</div>

								<div className="mb-3">
									<label htmlFor="address">Address</label>
									<input
										name="address"
										type="text"
										className="form-control"
										id="address"
										placeholder="1234 Main St"
										required
										defaultValue={"Back Street Boys"}
										onChange={handleChange}
									/>
									<div className="invalid-feedback">Please enter your shipping address.</div>
								</div>

								<div className="row">
									<div className="col-md-5 mb-3">
										<label htmlFor="country">Country</label>
										<select
											name="country"
											className="form-select d-block w-100"
											id="country"
											required
											defaultValue={"Argentina"}
											onChange={handleChange}
										>
											<option>Choose...</option>
											<option>Argentina</option>
										</select>
										<div className="invalid-feedback">Please select a valid country.</div>
									</div>
									<div className="col-md-4 mb-3">
										<label htmlFor="state">State</label>
										<select
											name="state"
											className="form-select d-block w-100"
											id="state"
											required
											defaultValue={"Buenos Aires"}
											onChange={handleChange}
										>
											<option>Choose...</option>
											<option>Buenos Aires</option>
										</select>
										<div className="invalid-feedback">Please provide a valid state.</div>
									</div>
									<div className="col-md-3 mb-3">
										<label htmlFor="zip">Zip</label>
										<input
											name="zip_code"
											type="text"
											className="form-control"
											id="zip"
											placeholder=""
											required
											defaultValue={"2000"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Zip code required.</div>
									</div>
								</div>

								<h4 className="mb-3">Payment</h4>

								<div className="d-block my-3">
									<div className="form-check">
										<input
											name="payment_method"
											id="credit"
											type="radio"
											className="form-check-input"
											required
											defaultChecked
											onChange={handleChange}
										/>
										<label className="form-check-label" htmlFor="credit">
											Credit card
										</label>
									</div>
									<div className="form-check">
										<input
											name="payment_method"
											id="debit"
											type="radio"
											className="form-check-input"
											required
											onChange={handleChange}
										/>
										<label className="form-check-label" htmlFor="debit">
											Debit card
										</label>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6 mb-3">
										<label htmlFor="cc-name">Name on card</label>
										<input
											name="card_name"
											type="text"
											className="form-control"
											id="cc-name"
											placeholder=""
											required
											defaultValue={"JOHN DOE"}
											onChange={handleChange}
										/>
										<small className="text-muted">Full name as displayed on card</small>
										<div className="invalid-feedback">Name on card is required</div>
									</div>
									<div className="col-md-6 mb-3">
										<label htmlFor="cc-number">Card number</label>
										<input
											name="card_number"
											type="text"
											className="form-control"
											id="cc-number"
											placeholder=""
											required
											defaultValue={"0000 0000 0000 0000"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Card number is required</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-3 mb-3">
										<label htmlFor="cc-expiration">Expiration</label>
										<input
											name="card_exp"
											type="text"
											className="form-control"
											id="cc-expiration"
											placeholder=""
											required
											defaultValue={"04/27"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Expiration date required</div>
									</div>
									<div className="col-md-3 mb-3">
										<label htmlFor="cc-expiration">CVV</label>
										<input
											name="card_cvv"
											type="text"
											className="form-control"
											id="cc-cvv"
											placeholder=""
											required
											defaultValue={"777"}
											onChange={handleChange}
										/>
										<div className="invalid-feedback">Security code required</div>
									</div>
								</div>
								<hr className="mb-4" />
								<button className="btn btn-primary btn-lg btn-block" type="submit">
									<i className="bi bi-bag-heart-fill" style={{ marginRight: "4px" }}></i> Purchase
								</button>
							</form>
						</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Checkout;
