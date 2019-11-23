import React from "react";
import { Button } from "reactstrap";
// import { Link } from "react-router-dom";
// import "./TimelineProfile.css";
import "./EventProfile.css";
import axios from "axios";

export default class EventProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineName: "",
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			eventLinks: [],
			message: "",
			parentId: ""
		};
	}

	componentDidMount() {
		console.log(
			"the props de este componente son: ::: ::: ::: ::: ::: ::: ",
			this.props.match.params.id
		);
		axios
			.get(
				`${process.env.REACT_APP_API_URL}/timelines/events/${this.props.match.params.id}`
			)
			.then(response => {
				console.log(
					"the response isssss >>>>>>>>>>>     >>>>>>>>>>>> ",
					response.data
				);
				this.setState({
					timelineName: response.data.parentName,
					eventTitle: response.data.eventTitle,
					eventDate: response.data.eventDate,
					eventDescription: response.data.eventDescription,
					eventLinks: response.data.eventLinks,
					parentId: response.data.parentId
				});
			})
			.catch(err => {
				console.log("error getting timelines ", err);
				alert("Unable to get timelines");
			});
	}

	deleteEvent = () => {
		console.log("borrando");
		axios
			.delete(
				// route we are hitting in the backend
				`${process.env.REACT_APP_API_URL}/events/delete/${this.props.match.params.id}`
			)
			.then(responseFromServer => {
				console.log(
					"This is the response of the server when deleting an event::::::::::::",
					responseFromServer
				);
				console.log("in timeline with name:", this.state.timelineName);
				this.setState({
					message: responseFromServer
				});
				this.props.history.push(`/timeline/${this.state.parentId}`);
			});
	};

	render() {
		console.log(
			"here are the props   >>>>> .>>>>>> >>>>>> .>>>>> >>>>>> .>>>>> .>>>>>> >>>>>> >>>>> ",
			this.props
		);
		return (
			<div className="timeline-event_wrapper">
				{/* <h1>{this.state.eventTitle}</h1> */}
				<div className="timeline_container" id="timeline-1">
					<div className="timeline-header">
						<h2 className="timeline-header__title">
							{this.state.timelineName}
						</h2>
						{/* <h3 className="timeline-header__subtitle">ds</h3> */}
					</div>
					<div className="timeline">
						<div className="timeline_item" data-text={this.state.eventDate}>
							<div className="timeline__content">
								<div className="img_header">
									<img
										alt=""
										className="timeline__img"
										src={this.state.eventLinks}
									/>
								</div>
								<h2 className="timeline__content-title">
									{this.state.eventTitle}
								</h2>
								<p className="timeline__content-desc">
									{this.state.eventDescription}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="btn-footer">
					<Button type="button" onClick={this.deleteEvent}>
						Delete Event
					</Button>
					<p>{this.message}</p>
				</div>
			</div>
		);
	}
}
//
