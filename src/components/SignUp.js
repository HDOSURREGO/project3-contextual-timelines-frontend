import React from "react";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./SignUp.css";

export default class SignUp extends React.Component {
	render() {
		return (
			<div>
				<div className="signUp-form">
					<Form>
						{/* First Name */}
						<Row form>
							<Col md={6}>
								<FormGroup className="form-group">
									<Label for="exampleInputFirstNamel1">First Name</Label>
									<Input
										className="form-control transparente"
										type="text"
										id="exampleInputFirstName1"
										placeholder="First Name"
									></Input>
									{/* define small text */}
									{/* <small id="firstNamelHelp" className="form-text text-muted"></small> */}
								</FormGroup>
							</Col>

							{/* Last Name */}
							<Col md={6}>
								<FormGroup className="form-group">
									<Label for="exampleInputLastNamel1">Last Name</Label>
									<Input
										className="form-control transparente"
										type="text"
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
								className="form-control transparente"
								type="email"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							></Input>
						</FormGroup>

						{/* Password */}
						<FormGroup className="form-group">
							<Label for="exampleInputPassword1">Password</Label>
							<Input
								className="form-control transparente"
								type="password"
								id="exampleInputpassword1"
								placeholder="Password"
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
				</div>
			</div>
		);
	}
}
// =================================================================



export default class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: "",
            email: "",
            password:"",
            message: null
        }
    }

    genericSync(event){
        // console.log("what is: ", event.target.value)
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit (event){
        // console.log("submitting form");
        event.preventDefault();

        axios.post(
            // route we are hitting in the backend
            "http://localhost:3001/api/signup",
            // the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
            this.state,
            // secure sending
            { withCredentials: true }
        )
        .then( responseFromServer => {
            // console.log("response is:", responseFromServer);
            const { userDoc } = responseFromServer.data;
            this.props.onUserChange(userDoc);
        })
        .catch( err => console.log("Err in signup: ", err));
    }

    render(){
        console.log("Do I have user in Signup: ", this.props.currentUser)
        const { fullName, email, password } = this.state;
        // console.log("STATE: ", this.state);
        if(this.props.currentUser){
            return(
                <div>
                    <h2> Welcome to your app, { this.props.currentUser.fullName } ! You're signed in! </h2>
                </div>
            )
        }
        return (
            <section>
                <h2> Sign up </h2>
                <form onSubmit ={ event => this.handleSubmit(event) } >
                    <label> Full name: </label>
                    <input
                        value={fullName} // this.state.fullName
                        onChange = { event => this.genericSync(event) } 
                        type="text"
                        name="fullName"
                        placeholder="Jesus"
                    />
                     <label> Email: </label>
                    <input
                        value={email} // this.state.email
                        onChange = { event => this.genericSync(event) } 
                        type="email"
                        name="email"
                        placeholder="my-email@ironhack.com"
                    />
                    <label> Password</label>
                    <input
                        value={password} // this.state.password
                        onChange = { event => this.genericSync(event) } 
                        type="password"
                        name="password"
                        placeholder="***********"
                    />
                    <button> Sign Up </button>
                </form>
                {/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
                { this.state.message && <div> { this.state.message } </div> }
            </section>





        )
    }
}