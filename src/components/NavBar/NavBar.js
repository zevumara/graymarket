// Dependencies
import { NavLink } from "react-router-dom";
import { useContext } from "react";
// Components
import SearchBar from "../SearchBar/SearchBar";
// Context
import { BasicContext } from "../../context/BasicContext";


const NavBar = () => {
	const basicContext = useContext(BasicContext);
	return (
		<header className="text-bg-dark sticky-top bg-secondary pt-2">
			<div className="container-xxl">
				<div className="row align-items-center">
					<div className="col-2 d-none d-lg-block">
						<NavLink to={"/graymarket"} className="navbar-brand fs-2 fw-bold" onClick={basicContext.clearSearch}>
							<span style={{ color: "#ccc9d0" }}>Gray</span>market
						</NavLink>
					</div>
					<div className="col-md-12 col-lg-10">
						<SearchBar />
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand navbar-dark bg-secondary pb-0">
				<div className="container-fluid justify-content-center">
					<ul className="navbar-nav fw-light text-center">
						<li className="nav-item mx-2">
							<NavLink
								to={"/graymarket"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
								onClick={basicContext.clearSearch}
							>
								Electronics
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink
								to={"/category/fornitures"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
								onClick={basicContext.clearSearch}
							>
								Fornitures
							</NavLink>
						</li>
						<li className="nav-item mx-2">
							<NavLink
								to={"/category/vehicles"}
								className={({ isActive }) => (isActive ? "active nav-link bg-white text-dark" : "nav-link")}
								onClick={basicContext.clearSearch}
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
