// Dependencies
import { Link } from "react-router-dom";

const Item = ({ item }) => {
	return (
		<div className="col-md-4">
			<div className="card">
				<Link to={"/item/" + item.id}>
					<img src={`../graymarket/img/${item.image}`} className="card-img-top" alt="Smartphone" />
				</Link>
				<div className="card-body">
					<h5 className="card-title" style={{ minHeight: "52px" }}>
						{item.title}
					</h5>
					<p className="card-text text-secondary">
						<small>{item.description}</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Item;
