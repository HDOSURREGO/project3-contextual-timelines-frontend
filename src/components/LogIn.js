import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./LogIn.css";
import axios from "axios";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			message: null
		};
	}

	genericSync(event) {
		// console.log("what is: ", event.target.value)
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		// console.log("submitting form");
		event.preventDefault();

		axios
			.post(
				// route we are hitting in the backend
				"http://localhost:3001/login",
				// the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
				this.state,
				// secure sending
				{ withCredentials: true }
			)
			.then(responseFromServer => {
				// console.log("response is:", responseFromServer);
				const { userDoc } = responseFromServer.data;
				this.props.onUserChange(userDoc);
				// alert("You are logged in.");
				this.props.history.push("/");
			})
			.catch(err => {
				// console.log("err: ", err.response)
				if (err) return this.setState({ message: err });
			});
	}

	render() {
		console.log("this is the state>>>>>>>>>>> ", this.state);
		console.log("here are the props ;;;;;;;;;;;;;;; ", this.props);
		const { email, password } = this.state;
		return (
			<div>
				<div className="logIn-form">
					<Form onSubmit={event => this.handleSubmit(event)}>
						<FormGroup className="form-group">
							<Label for="exampleInputEmail1">Email address</Label>
							<Input
								value={email} // this.state.email
								onChange={event => this.genericSync(event)}
								className="form-control transparente"
								type="email"
								name="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							></Input>
							<small id="emailHelp" className="form-text text-muted"></small>
						</FormGroup>
						{/* Password Input */}
						<FormGroup className="form-group">
							<Label for="exampleInputPassword1">Password</Label>
							<Input
								value={password} // this.state.password
								onChange={event => this.genericSync(event)}
								className="form-control transparente"
								type="password"
								name="password"
								id="exampleInputpassword1"
								placeholder="Password"
							></Input>
							<small id="emailHelp" className="form-text text-muted"></small>
						</FormGroup>
						<Button type="submit" color="secondary">
							LogIn
						</Button>

						<Button
							type="submit"
							color="secondary"
							style={{ marginLeft: "10%" }}
						>
							Cancel
						</Button>
					</Form>
					{/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
					{this.state.message && <div> {this.state.message} </div>}
				</div>
			</div>
		);
	}
}
