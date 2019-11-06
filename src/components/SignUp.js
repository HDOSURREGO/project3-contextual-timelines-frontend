import React from "react";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./SignUp.css";

// =

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			message: null
		};
	}

	genericSync(event) {
		console.log("what is: ", event.target.value);
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	handleSubmit(event) {
		console.log("submitting form");
		event.preventDefault();

		axios
			.post(
				// route we are hitting in the backend
				"http://localhost:3000/signup",
				// the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
				this.state,
				// secure sending
				{ withCredentials: true }
			)
			.then(responseFromServer => {
				console.log("response is:", responseFromServer);
				const { userDoc } = responseFromServer.data;
				this.props.onUserChange(userDoc);
			})
			.catch(err => console.log("Err in signup: ", err));
	}

	render() {
		console.log("Do I have user in Signup: ", this.props.currentUser);
		const { firstName, lastName, email, password } = this.state;
		console.log("STATE: ", this.state);
		if (this.props.currentUser) {
			return (
				<div>
					<h2>
						{" "}
						Welcome to Contextual Timelines, {
							this.props.currentUser.firstName
						}{" "}
						! You're signed in!{" "}
					</h2>
				</div>
			);
		}
		return (
			<div>
				<div className="signUp-form">
					<Form onSubmit={event => this.handleSubmit(event)}>
						{/* First Name */}
						<Row form>
							<Col md={6}>
								<FormGroup className="form-group">
									<Label>First Name</Label>
									<Input
										className="form-control transparente"
										value={firstName} // this.state.firstName
										onChange={event => this.genericSync(event)}
										type="text"
										id="exampleInputFirstName1"
										name="firstName"
										placeholder="First Name"
									></Input>
								</FormGroup>
							</Col>
							<Col md={6}>
								<FormGroup className="form-group">
									<Label>Last Name</Label>
									<Input
										value={lastName} // this.state.lastName
										onChange={event => this.genericSync(event)}
										className="form-control transparente"
										type="text"
										name="lastName"
										id="exampleInputLastName1"
										placeholder="Last Name"
									></Input>
									{/* define small text */}
									{/* <small id="firstNamelHelp" className="form-text text-muted"></small> */}
								</FormGroup>
							</Col>
						</Row>

						{/* UserName */}
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
						</FormGroup>

						<FormGroup className="form-group">
							<Label for="exampleInputPassword1">Password</Label>
							<Input
								value={password} // this.state.password
								onChange={event => this.genericSync(event)}
								className="form-control transparente"
								type="password"
								name="password"
								id="exampleInputpassword1"
								placeholder="Enter Password"
							></Input>
						</FormGroup>

						<Button type="submit" color="secondary">
							SignUp
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
