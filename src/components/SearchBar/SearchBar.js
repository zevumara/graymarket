// Dependencies
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Components
import CartWidget from "../Cart/CartWidget";
// Context
import { BasicContext } from "../../context/BasicContext";

const SearchBar = () => {
    const navigate = useNavigate();
    const basicContext = useContext(BasicContext);
    const [keywords, setKeywords] = useState("");

    const handleChange = (event) => {
        setKeywords(event.target.value);
    }

    const searchQuery = (event) => {
        event.preventDefault();
        navigate("/search");
        document.querySelector("#query").value = keywords;
        basicContext.search(keywords);
    }

    return (
        <form id="buscador" className="input-group" role="search" onSubmit={searchQuery}>
            <input
                className="form-control"
                type="search"
                autoComplete="off"
                placeholder="Search..."
                aria-label="Search"
                onChange={handleChange}
                id="query"
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
    )
}

export default SearchBar;