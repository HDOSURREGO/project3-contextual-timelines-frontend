import React from "react";
import "./LogIn.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class LogIn extends React.Component {
<<<<<<< HEAD
	render() {
		return (
			<div>
				<div className="logIn-form">
					<Form>
						<FormGroup className="form-group">
							<Label for="exampleInputEmail1">Email address</Label>
							<Input
								className="form-control transparente"
								type="email"
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
								className="form-control transparente"
								type="password"
								id="exampleInputpassword1"
								placeholder="Password"
							></Input>
							<small id="emailHelp" className="form-text text-muted"></small>
						</FormGroup>
						<Button type="submit" color="secondary">
							LogIn
						</Button>
					</Form>
				</div>
			</div>
		);
	}
}
=======
    render(){
        return (
            <div>
                <div className="logIn-form">
                <Form>
                <FormGroup className="form-group">
                       <Label for='exampleInputEmail1'>Email address</Label>
                       <Input className="form-control transparente" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></Input>
                       <small id="emailHelp" className="form-text text-muted"></small>
                   </FormGroup>
                   {/* Password Input */}
                   <FormGroup className="form-group">
                       <Label for='exampleInputPassword1'>Password</Label>
                       <Input className="form-control transparente" type="password" id="exampleInputpassword1" placeholder="Password"></Input>
                       <small id="emailHelp" className="form-text text-muted"></small>
                   </FormGroup>
                   <Button type="submit" color="secondary">LogIn</Button>

                   <Button type="submit" color="secondary" style={{marginLeft : "10%"}}>Cancel</Button>
                </Form>
                </div>
            </div>
        )
    }
}
>>>>>>> e98656a7af1f817a7a6167d3623d284c8801979e
