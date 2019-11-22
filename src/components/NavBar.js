import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Timeline from "./Timeline";
import AuthService from "./auth-service";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loggedInUser: null };
		this.service = new AuthService();
	}
	logoutUser = event => {
		console.log("this is the props ---- ", this.props);
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
							<div>
								{this.props.theUser && (
									<p>Hello {this.props.theUser.firstName} !</p>
								)}
							</div>
						</div>
					</div>
					<div>
						{this.props.theUser && (
							<div className="nav-title">
								<Link to={"/"}>{Home}Home </Link>
								<Link to={"/timeline/showTimeline"}>
									{Timeline} Show Timelines
								</Link>
								<Link to={"/login"} onClick={e => this.logoutUser(e)}>
									Logout
								</Link>
								<Link to={"/timeline-form"}>Create Timeline</Link>
							</div>
						)}
						{!this.props.theUser && (
							<div className="nav-title">
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
