// Dependencies
import { useContext, useState, useEffect } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
// Contexts
import { CartContext } from "../../context/CartContext";
const Checkout = ({ loader }) => {
	const cartContext = useContext(CartContext);
	const [message, setMessage] = useState("");

	useEffect(() => {
		cartContext.cart.lenght == 0 && setMessage("OK");
	}, []);

	const sendOrder = (event) => {
		event.preventDefault();
		loader(true);
		createOrder();
	};

	const handleChange = (event) => {
		// logica para guardar form data
		return;
	};

	// Crear orden en Firestore
	const createOrder = async () => {
		const buyer = {
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
		};
		const order = { buyer, items: cartContext.cart, total: cartContext.total };
		const query = collection(getFirestore(), "orders");
		await addDoc(query, order)
			.then(({ id }) => {
				setMessage(id);
				cartContext.clear();
				console.log(id);
			})
			.catch((error) => {
				setMessage(error);
			});
		loader(false);
	};

	if (message) {
		return (
			<main className="album">
				<div className="container-xxl pt-4 pb-3">
					<div className="alert alert-success" role="alert">
						<h4 className="alert-heading">
							<i className="bi bi-check-circle-fill"></i> Well done!
						</h4>
						<p>
							Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
							you can see how spacing within an alert works with this kind of content.
						</p>
						<hr />
						<p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
					</div>
				</div>
			</main>
		);
	} else {
		return (
			<main className="album">
				<div className="container-xxl pt-4 pb-3">
					<div className="row">
						<div className="col-md-4 order-md-2 mb-4">
							<h4 className="d-flex justify-content-between align-items-center mb-3">
								<span className="text-muted">Your cart</span>
								<span className="badge badge-secondary badge-pill">3</span>
							</h4>
							<ul className="list-group mb-3">
								{cartContext.cart.map((item) => (
									<li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
										<div>
											<h6 className="my-0">
												<span className="badge bg-primary me-2">{item.quantity}</span>
												{item.title}
											</h6>
											<small className="text-muted">{item.description}</small>
										</div>
										<span className="text-muted">${item.price}</span>
									</li>
								))}
								<li className="list-group-item d-flex justify-content-between">
									<span>Total</span>
									<strong>${cartContext.total}</strong>
								</li>
							</ul>
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
				</div>
			</main>
		);
	}
};

export default Checkout;
