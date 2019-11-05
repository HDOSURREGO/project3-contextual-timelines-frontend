import React from 'react'
import {Col,Row,Button,Form,FormGroup,Label,Input} from 'reactstrap'
import './SignUp.css'

export default class SignUp extends React.Component {
    render(){
        return (
            <div>
                <div className='signUp-form'>
                    <Form>
                        {/* First Name */}
                        <Row form>
                            <Col md={6}>
                                <FormGroup className="form-group">
                                <Label for='exampleInputFirstNamel1'>First Name</Label>
                                <Input className="form-control transparente" type="text" id="exampleInputFirstName1"  placeholder="First Name"></Input>
                               {/* define small text */}
                                {/* <small id="firstNamelHelp" className="form-text text-muted"></small> */}
                            </FormGroup>
                            </Col>
                            
                            {/* Last Name */}
                            <Col md={6}>
                                <FormGroup className="form-group">
                                <Label for='exampleInputLastNamel1'>Last Name</Label>
                                <Input className="form-control transparente" type="text" id="exampleInputLastName1"  placeholder="Last Name"></Input>
                               {/* define small text */}
                                {/* <small id="firstNamelHelp" className="form-text text-muted"></small> */}
                                </FormGroup>
                                </Col>
                        </Row>

                        {/* UserName */}
                        <FormGroup className="form-group">
                       <Label for='exampleInputEmail1'>Email address</Label>
                       <Input className="form-control transparente" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></Input>
                   </FormGroup>

                   {/* Password */}
                   <FormGroup className="form-group">
                       <Label for='exampleInputPassword1'>Password</Label>
                       <Input className="form-control transparente" type="password" id="exampleInputpassword1" placeholder="Password"></Input> 
                   </FormGroup>

                   <Button type="submit" color="secondary">SignUp</Button>
                   <Button type="submit" color="secondary" style={{marginLeft : "10%"}}>Cancel</Button>
              

                    </Form>
                </div>
            </div>
        )
    }
}