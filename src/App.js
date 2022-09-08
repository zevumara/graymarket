import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import NavBar from "./components/NavBar.js";

function App() {
	return (
		<div className="App">
			{/* <NavBar /> */}
			<div className="container-xxl py-5">
				{/* <ItemListContainer /> */}
				<ItemDetailContainer />
			</div>
		</div>
	);
}

export default App;
