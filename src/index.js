import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Popper from "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
	apiKey: "AIzaSyCokBnFKS14xiAHccqDuBooKNjeIMj0CDg",
	authDomain: "graymarket-477c8.firebaseapp.com",
	projectId: "graymarket-477c8",
	storageBucket: "graymarket-477c8.appspot.com",
	messagingSenderId: "1019306318694",
	appId: "1:1019306318694:web:cbe5df12b007ab5eb9c6a7",
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	//<React.StrictMode>
	<App />
	//</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
