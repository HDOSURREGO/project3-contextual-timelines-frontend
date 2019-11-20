import React from "react";
import { Form, FormGroup, Label, Input, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./TimelineProfile.css";
import axios from "axios";

export default class TimelineProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineName: "",
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			eventLinks: [],
			events: []
		};
	}

	genericSync(event) {
		const { name, value } = event.target;
		this.setState({ [name]: value });
		console.log(
			"Forma Events: State despues de leer el nombre en la forma",
			this.state
		);
	}

	handleSubmitEventCreate(event) {
		event.preventDefault();

		const eventTitle = this.state.eventTitle;
		const eventDate = this.state.eventDate;
		const eventDescription = this.state.eventDescription;
		const eventLinks = this.state.eventLinks;

		axios
			.post(
				// route we are hitting in the backend
				`${process.env.REACT_APP_API_URL}/event/create/${this.props.match.params.id}`,
				// the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
				{
					parentId: this.props.match.params.id,
					eventTitle,
					eventDate,
					eventDescription,
					eventLinks
				}
				// secure sending
				// { withCredentials: true }
			)
			.then(responseFromServer => {
				console.log(
					"Esto fue lo que volvio del servidor tratando de crear un evento:",
					responseFromServer
				);

				let eventsArray = this.state.events ? this.state.events : [];
				eventsArray.push(responseFromServer.data);

				this.setState({ events: eventsArray });
				console.log(
					`"Estos son los eventos asociados al timeline: ${eventsArray}
                     y este es el timeline asociado: ${this.state.timelineName}`
				);
			})
			.catch(err => console.log("Err in timeline creation: ", err));
	}

	componentDidMount() {
		console.log("the props ========dadadadadada ", this.props);
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/timelines/${this.props.match.params.id}`
			)
			.then(response => {
				console.log(
					"the response isssss >>>>>>>>>>>     >>>>>>>>>>>> ",
					response.data
				);
				this.setState({
					events: response.data.events,
					timelineName: response.data.timelineName
				});
			})
			.catch(err => {
				console.log("error getting timelines ", err);
				alert("Unable to get timelines");
			});
	}

	showEvents() {
		if (this.state.events)
			return this.state.events.map((event, i) => {
				return (
					<div className="item-list">
						<Link to={`/event/${event._id}`} key={i}>
							<div className="listTitles">{event.eventTitle}</div>
						</Link>
					</div>
				);
			});
	}

	render() {
		const {
			timelineName,
			eventTitle,
			eventDate,
			eventDescription,
			eventLinks
		} = this.state;
		return (
			<div className="timeline-event-wrapper">
				<h1>{timelineName}</h1>
				<div className="timeline-events">
					<Row form className="form-links">
						{/* Inicio Columnas */}
						<Col md={6}>
							<Form
								className="event-form"
								onSubmit={event => this.handleSubmitEventCreate(event)}
							>
								{/* Events */}
								<h2>Create Event</h2>
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
										value={eventDate} // this.state.eventDate
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
										rows="8"
										value={eventDescription} //this.state.eventDescription
										onChange={event => this.genericSync(event)}
										type="textarea"
										name="eventDescription"
										placeholder="Event Description"
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
											<Button color="primary" style={{ marginLeft: "65%" }}>
												Add Links
											</Button>
										</FormGroup>
									</Col>
								</Row>
								<Button className="btn-event" color="primary">
									Create Event
								</Button>
							</Form>
						</Col>
						<Col md={6} className="item-list">
							<h2> Events in {timelineName}</h2>
							<div className="events-list">{this.showEvents()}</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
