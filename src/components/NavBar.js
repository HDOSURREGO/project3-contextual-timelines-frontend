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
						<ul className='test'>
							<li><p>Contextual TimeLines</p></li>
							
								{this.props.theUser && (
								<li>	<p>Hello {this.props.theUser.firstName} !</p></li>
								)}
							
							</ul>
					</div>
					<div className="nav-title">
						{this.props.theUser && (
							<div className="nav-title">
								<Link to={"/"} className='link'>{Home}Home </Link>
								<Link to={"/login"}  onClick={e => this.logoutUser(e)} className='link'>
									Logout
								</Link>
								<Link to={"/timeline-form"}  className='link'>Create Timeline</Link>
								<Link to={"/timeline/showTimeline"}  className='link'>
									{Timeline} Show Timelines
								</Link>
								<Link to={"/timelineCompare"}  className='link'>Compare Timeline</Link>
							</div>
						)}
						{!this.props.theUser && (
							<div className="nav-title">
								<Link to={"/signup"}  className='link'>{SignUp}Signup </Link>
								<Link to={"/login"}  className='link'>{LogIn}Login</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
