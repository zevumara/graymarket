// Dependencies
import { useState } from "react";
// Contexts
import { BasicContext } from "./BasicContext";

const BasicProvider = ({ children }) => {
	const [query, setQuery] = useState("");

	const search = (keywords) => {
		setQuery(keywords);
	};

	const clearSearch = () => {
		setQuery("");
		document.querySelector("#query").value = "";
	};

	return <BasicContext.Provider value={{ query, search, clearSearch }}>{children}</BasicContext.Provider>;
};

export default BasicProvider;
