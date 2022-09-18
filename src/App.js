// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// Components
import NavBar from "./components/NavBar/NavBar.js";
import CartSidebar from "./components/Cart/CartSidebar.js";
import ItemListContainer from "./components/ItemList/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.js";
import Footer from "./components/Footer/Footer.js";
import Loader from "./components/Loader/Loader.js";
// Contexts
import CartProvider from "./context/CartProvider.js";

function App() {
	// Loader
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loading ? console.log("Cargando...") : console.log("Cargado.");
	}, [loading]);

	return (
		<CartProvider>
			<BrowserRouter>
				{loading && <Loader />}
				<NavBar />
				<CartSidebar />
				<Routes>
					<Route path="graymarket" element={<ItemListContainer loader={setLoading} />} />
					<Route path="category/:categoryId" element={<ItemListContainer loader={setLoading} />} />
					<Route path="item/:itemId" element={<ItemDetailContainer loader={setLoading} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
