import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "../src/components/LogIn.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/checkuser", { withCredentials: true })
			.then(responseFromTheBackend => {
				// console.log("User in APP.JS: ", responseFromTheBackend)
				const { userDoc } = responseFromTheBackend.data;
				this.syncCurrentUSer(userDoc);
			})
			.catch(err =>
				console.log(
					"Err while getting the user from the checkuser route: ",
					err
				)
			);
	}

	syncCurrentUSer(user) {
		this.setState({ currentUser: user });
	}
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={LogIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/timeline" component={Timeline} />
				</Switch>
			</div>
		);
	}
}

export default App;
