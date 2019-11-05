import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "../src/components/LogIn.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					{/* <Route exact path="/" component={Home} /> */}
					<Route exact path="/login" component={LogIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/timeline" component={Timeline} />
				</Switch>
			</div>
		);
	}
}

export default App;
