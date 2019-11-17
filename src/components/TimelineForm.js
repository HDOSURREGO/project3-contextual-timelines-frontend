import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./TimelineForm.css";
import axios from "axios";

export default class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineName: "",
			timelines: null
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
				console.log(
					"Esto fue lo que volvio del servidor:",
					responseFromServer.data,
					this.state
				);

				let timelineArray = this.state.timelines ? this.state.timelines : [];
				timelineArray.push(responseFromServer.data);

				this.setState({ timelines: timelineArray });
			})
			.catch(err => console.log("Err in timeline creation: ", err));
	}

	showTimelines() {
		return this.state.timelines.map((timeline, i) => {
			return (
				<div className="item-list">
					<Link to={`/timeline/${timeline._id}`} key={i}>
						<div className="listTitles">{timeline.timelineName}</div>
					</Link>
				</div>
			);
		});
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_API_URL}/timelines`)
			.then(response => {
				console.log("the response <><><><><><><>>>< ", response.data);
				this.setState({ timelines: response.data });
			})
			.catch(err => {
				console.log("error getting timelines ", err);
				alert("Unable to get timelines");
			});
	}

	render() {
		console.log("the state ---- ", this.state);
		const { timelineName } = this.state;
		return (
			<div className="timeline-wrapper">
				<div className="timeline-form">
					<Form
						className="event-form"
						onSubmit={event => this.handleSubmitTimelineName(event)}
					>
						{/* timeline Name */}
						<FormGroup className="timeline-name-wrapper">
							<Label for="timelineName">TimeLine</Label>
							<Input
								className="input-form"
								value={timelineName} // this.state.timelineName
								onChange={event => this.genericSync(event)}
								type="text"
								name="timelineName"
								id="timelineName"
								placeholder="Timeline Name"
							/>
							<Button
								type="submit"
								color="secondary"
								style={{ marginLeft: "5%", marginTop: "20px" }}
							>
								Add Timeline
							</Button>
						</FormGroup>
					</Form>
				</div>
				<div className="timeline-list">
					{this.state.timelines && this.showTimelines()}
				</div>
			</div>
		);
	}
}
