// Dependencies
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// Components
import ItemCount from "./ItemCount";
// Contexts
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
	const [quantity, setQuantity] = useState(1);
	const cartContext = useContext(CartContext);

	return (
		<>
			<div className="card">
				<div className="row g-0 py-4">
					<div className="col-md-5 px-3">
						<div className="d-flex flex-column justify-content-center">
							<img src={`../graymarket/img/${item.image}`} className="card-img-top" alt="Product" />
						</div>
					</div>
					<div className="col-md-7">
						<small className="text-secondary opacity-75">
							products &gt;{" "}
							<Link
								to={item.categoryId == "electronics" ? `/graymarket` : `/category/` + item.categoryId}
								className="link-secondary"
							>
								{item.categoryId}
							</Link>
						</small>
						<h1>{item.title}</h1>
						<p className="text-secondary pb-3">{item.description}</p>
						<h2 className="pb-2">${item.price}</h2>
						<div className="text-secondary">
							<small>Quantity:</small>
							<ItemCount count={quantity} setCount={setQuantity} stock={10} />
						</div>
						<div className="input">
							<a onClick={() => cartContext.addItem(item, quantity)} className="btn btn-primary">
								<i className="bi bi-cart-plus me-2"></i>Add to cart
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ItemDetail;
