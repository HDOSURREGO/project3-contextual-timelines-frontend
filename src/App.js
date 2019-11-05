import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import NavBar from './components/NavBar';

function App() {
	return (
		<div className="App">
			<NavBar/>
			{/* <LogIn/> */}
			<SignUp/>
		</div>
	);
}

export default App;
