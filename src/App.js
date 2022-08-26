import ItemListContainer from "./components/ItemListContainer.js";
import NavBar from "./components/NavBar.js";

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Hola Susana" />
		</div>
	);
}

export default App;
