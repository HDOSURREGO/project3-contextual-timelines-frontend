import React from 'react'
import { Form, FormGroup, Label, Input, Col, Row, Button} from 'reactstrap';
import './TimelineForm.css'

export default class TimelineForm extends React.Component{
    render(){
        return(
            <div>
                <div className="timeline-events">
                <Form>
                    {/* timeline Name */}
                    <FormGroup>
                    <Label for="timeLineName">TimeLine</Label>
                    <Input className="input-form"  type="text" name="timelineName"  id="timeLineName" placeholder="Name"/>
                    </FormGroup>
                 
                {/* Events */}
                 <h2>Events</h2>
             <FormGroup>
                    <Label for="eventsName">Events</Label>
                    <Input className="input-form"   type="text" name="eventsName"  id="eventsName" placeholder="Name"/>
            </FormGroup>

                    {/* Events Date */}
            <FormGroup>
                <Label for="exampleDatetime">Events Date</Label>
                <Input className="input-form" type="date" name="datetime" id="exampleDatetime"  placeholder=" Events Datetime"/>
            </FormGroup>
            
            {/* Description */}
        <FormGroup>
            <Label for="descriptionText">Description</Label>
            <Input className="input-form" type="textarea" name="text" id="descriptionText"/>
        </FormGroup>

            {/* URL */}
            <Label for="exampleUrl">Links</Label>
            <Row form className="form-links">
                <Col md={6}>
                    <FormGroup>
                    <Input className="input-form" type="url"name="url" id="linksUrl"  placeholder="Links"/>
                    </FormGroup>
                    </Col>
        
                <Col md={6}>
                    <FormGroup>
                    <Button color="primary" style={{marginLeft:"37%"}}>Add Links</Button>
                    </FormGroup>
                </Col>
    </Row>

      <Button color="secondary">Add Event</Button>
      <Button color="secondary" style={{ marginLeft: "5%" }}>Save the TimeLine</Button>
          
</Form>
      </div>    
            </div>
        )
    }
}
          
         
       
          
          
          
         
        