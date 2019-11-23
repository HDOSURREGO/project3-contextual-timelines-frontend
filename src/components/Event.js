import React from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./TimelineForm.css";
import axios from "axios";

export default class TimelineForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineName: "",
			timelines: null,
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			eventLinks: []
		};
	}

	genericSync(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log(
			"Este es el state despues de leer el nombre en la forma",
			this.state
		);
	}

	handleSubmitTimelineName(event) {
		event.preventDefault();

		axios
			.post(
				// route we are hitting in the backend
				`${process.env.REACT_APP_API_URL}/timeline/create`,
				// the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
				this.state,
				// secure sending
				{ withCredentials: true }
			)
			.then(responseFromServer => {
				console.log("Esto fue lo que volvio del servidor:");

				let timelineArray = this.state.timelines;
				timelineArray.push(responseFromServer.data);

				this.setState({ timelines: timelineArray });
			})
			.catch(err => console.log("Err in timeline creation: ", err));
	}

	showTimelines() {
		this.state.timelines.map((timeline, i) => {
			return (
				<Link to={`/timeline/{timeline._id}`} key={i}>
					{timeline.title}
				</Link>
			);
		});
	}

	render() {
		const { eventTitle, eventDate, eventDescription, eventLinks } = this.state;
		return (
			<div>
				<div className="timeline-events">
					<Form onSubmit={event => this.handleSubmit(event)}>
						{/* Events */}
						<h2>Events</h2>
						<FormGroup>
							<Label for="eventTitle">Events</Label>
							<Input
								className="input-form"
								value={eventTitle} // this.state.eventTitle
								onChange={event => this.genericSync(event)}
								type="text"
								name="eventTitle"
								id="eventsName"
								placeholder="Event Title"
							/>
						</FormGroup>
						{/* Events Date */}
						<FormGroup>
							<Label for="eventDate">Events Date</Label>
							<Input
								className="input-form"
								value={eventDate} // this.state.eventTitle
								onChange={event => this.genericSync(event)}
								type="date"
								name="eventDate"
								id="Datetime"
								placeholder=" Event Date"
							/>
						</FormGroup>
						{/* Description */}
						<FormGroup>
							<Label for="eventDescription">Description</Label>
							<Input
								className="input-form"
								value={eventDescription} //this.state.eventDescription
								onChange={event => this.genericSync(event)}
								type="textarea"
								name="eventDescription"
								id="descriptionText"
							/>
						</FormGroup>
						{/* URL */}
						<Label for="eventLinks">Links</Label>
						<Row form className="form-links">
							<Col md={6}>
								<FormGroup>
									<Input
										className="input-form"
										value={eventLinks} //this.state.eventDescription
										onChange={event => this.genericSync(event)}
										type="url"
										name="eventLinks"
										id="linksUrl"
										placeholder="Links"
									/>
								</FormGroup>
							</Col>

							<Col md={6}>
								<FormGroup>
									<Button color="secondary" style={{ marginLeft: "37%" }}>
										Add Links
									</Button>
								</FormGroup>
							</Col>
						</Row>
					</Form>
					<Button color="secondary">Add Event</Button>
				</div>
			</div>
		);
	}
}
