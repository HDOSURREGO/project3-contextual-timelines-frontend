import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";

export default class NavBar extends React.Component {
	render() {
		return (
			<div>
				<div className="nav">
					{/* <input type="checkbox" id="nav-check"/> */}
					<div className="nav-header">
						<div className="nav-title">
							<div className="nav-brand">Contextual TimeLines</div>
						</div>
					</div>
					<div className="nav-btn">
						<label for="nav-check">
							<span></span>
							<span></span>
							<span></span>
						</label>
					</div>

					<div className="nav-links">
						<Link to={"/"}>{Home}Home</Link>
						<Link to={"/signup"}>{SignUp}Signup</Link>
						<Link to={"/login"}>{LogIn}Login</Link>
					</div>
				</div>
			</div>
		);
	}
}
