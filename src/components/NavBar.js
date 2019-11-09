import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import AuthService from "./auth-service";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loggedInUser: null };
		this.service = new AuthService();
	}
	logoutUser = event => {
		event.preventDefault();
		this.service.logout().then(() => {
			this.setState({ loggedInUser: null });
			this.props.getUser(null);
		});
	};
	render() {
		console.log("the props in nav ************ ", this.props);
		return (
			<div>
				<div className="nav">
					{/* <input type="checkbox" id="nav-check"/> */}
					<div className="nav-header">
						<div className="nav-title">
							<div className="nav-brand">Contextual TimeLines</div>
						</div>
					</div>

					<div className="nav-links">
						{this.props.theUser && (
							<p>Hello {this.props.theUser.firstName} !</p>
						)}
						<Link to={"/"}>{Home}Home </Link>

						{this.props.theUser && (
							<Link to={"/login"} onClick={() => this.logoutUser()}>
								Logout
							</Link>
						)}
						{!this.props.theUser && (
							<div className="nav-links">
								<Link to={"/signup"}>{SignUp}Signup </Link>
								<Link to={"/login"}>{LogIn}Login</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
