import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import "../src/components/LogIn.css";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Timeline from "./components/Timeline";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TimelineForm from './components/TimelineForm';

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
				console.log("User in APP.JS: ", responseFromTheBackend);
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
		console.log("this is the current user info --------------- ", user);
		this.setState({ currentUser: user });
		console.log(
			"this is the current user in the state }}}}}}}}}}} ",
			this.state
		);
	}
	render() {
		return (
			<div>
				<NavBar theUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/login"
						render={props => (
							<LogIn
								{...props}
								currentUser={this.state.currentUser}
								onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
							/>
						)}
					/>

					<Route
						exact
						path="/signup"
						render={props => (
							<SignUp
								{...props}
								currentUser={this.state.currentUser}
								onUserChange={userDoc => this.syncCurrentUSer(userDoc)}
							/>
						)}
					/>
					<Route exact path="/timeline" component={Timeline} />
					<Route exact path="/timeline-form" component={TimelineForm} />
				</Switch>
			</div>
		);
	}
}

export default App;
