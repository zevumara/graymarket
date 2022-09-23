// Dependencies
import { NavLink } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";

const NavBar = () => {
	return (
		<header className="text-bg-dark sticky-top bg-secondary pt-2">
			<div className="container-xxl">
				<div className="row align-items-center">
					<div className="col-2 d-none d-lg-block">
						<NavLink to={"graymarket"} className="navbar-brand fs-2 fw-bold">
							<span style={{ color: "#ccc9d0" }}>Gray</span>market
						</NavLink>
					</div>
					<div className="col-md-12 col-lg-10">
						<form id="buscador" className="input-group" role="search" action="submit">
							<input
								className="form-control"
								type="search"
								autoComplete="off"
								placeholder="Search..."
								aria-label="Search"
								id="buscador_input"
							/>
							<button className="btn btn-secondary" type="submit">
								<i className="bi bi-search"></i>
							</button>
							<button
								className="btn btn-primary px-5 position-relative"
								type="button"
								data-bs-toggle="offcanvas"
								data-bs-target="#carrito"
								aria-controls="carrito"
							>
								<i className="bi bi-cart-fill"></i>
								<CartWidget />
							</button>
						</form>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand navbar-dark bg-secondary pb-0">
				<div className="container-fluid justify-content-center">
					<ul className="navbar-nav fw-light text-center">
						<li className="nav-item mx-2">
							<NavLink
								to={"/category/MLA1055"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
							>
								Electronics
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink
								to={"/category/MLA436380"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
							>
								Fornitures
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink
								to={"/category/MLA1744"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
							>
								Vehicles
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
