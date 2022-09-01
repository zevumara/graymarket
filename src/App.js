import ItemListContainer from "./components/ItemListContainer.js";
import NavBar from "./components/NavBar.js";

function App() {
	return (
		<div className="App">
			{/* <NavBar /> */}
			<div className="container-xxl py-5">
				<ItemListContainer />
			</div>
		</div>
	);
}

export default App;
