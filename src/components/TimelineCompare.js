import React from "react";
import "./Timeline.css";
import axios from "axios";
import { Col, Row } from "reactstrap";

export default class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineSelected1: null,
			timelineSelected2: null,
			timelineSelected3: null,
			timelineName: "",
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			timelines: [],
			events: []
		};
		this.showTimelineInfo1 = this.showTimelineInfo1.bind(this);
		this.showTimelineInfo2 = this.showTimelineInfo2.bind(this);
		this.showTimelineInfo3 = this.showTimelineInfo3.bind(this);
	}

	componentDidMount() {
		axios
			.get(`${process.env.REACT_APP_API_URL}/timelines`)
			.then(response => {
				console.log(
					"the response getting the Timelines for the showInfo: ",
					response.data
				);
				this.setState({
					timelines: response.data
				});
			})
			.catch(err => {
				console.log("error getting timelines ", err);
				alert("Unable to get timelines");
			});
	}

	showTimelineInfo1(event) {
		console.log("Este es el id del timeline seleccionado:", event.target.value);
		const selectedTimelines = this.state.timelines.filter(
			chosenTimeline => chosenTimeline._id === event.target.value
		);

		this.setState({
			timelineSelected1: selectedTimelines[0]
		});
	}

	showTimelineInfo2(event) {
		console.log("Este es el id del timeline seleccionado:", event.target.value);
		const selectedTimelines = this.state.timelines.filter(
			chosenTimeline => chosenTimeline._id === event.target.value
		);

		this.setState({
			timelineSelected2: selectedTimelines[0]
		});
	}

	showTimelineInfo3(event) {
		console.log("Este es el id del timeline seleccionado:", event.target.value);
		const selectedTimelines = this.state.timelines.filter(
			chosenTimeline => chosenTimeline._id === event.target.value
		);

		this.setState({
			timelineSelected3: selectedTimelines[0]
		});
	}

	render() {
		console.log("After componentDidMount the state is :", this.state);
		let timelinesList = this.state.timelines;
		let optionItems = timelinesList.map(chosenTimeline => (
			<option value={chosenTimeline._id} key={chosenTimeline._id}>
				{chosenTimeline.timelineName}
			</option>
		));
		optionItems.unshift(
			<option value="unselected" key="unselected">
				Select a timeline
			</option>
		);

		return (
			<div>
				<Row form className="firstTimeline">
					{/* First Col */}
					<Col md={4}>
						<div className="timeline-header">
							<select
								className="select-button"
								onChange={this.showTimelineInfo1}
							>
								{optionItems}
							</select>

							<h2 className="timeline-header__title">
								{this.state.timelineSelected1
									? this.state.timelineSelected1.timelineName
									: ""}
							</h2>
						</div>
						<div className="timeline-container" id="timeline-1">
							{this.state.timelineSelected1
								? this.state.timelineSelected1.events.map(eachEvent => (
										<div className="timeline-header">
											<h3 className="timeline-header__subtitle">
												{eachEvent.eventTitle}
											</h3>
											<h2 className="timeline__content-title">
												{eachEvent.eventDate}
											</h2>
											<img
												alt=""
												className="timeline__img"
												src={eachEvent.eventLinks}
											/>
											<p className="timeline__content-desc">
												{eachEvent.eventDescription}
											</p>
										</div>
								  ))
								: ""}
						</div>

						{/*first col  */}
					</Col>

					{/* Second Col */}
					<Col md={4}>
						<div className="timeline-header">
							<select
								className="select-button"
								onChange={this.showTimelineInfo2}
							>
								{optionItems}
							</select>

							<h2 className="timeline-header__title">
								{this.state.timelineSelected2
									? this.state.timelineSelected2.timelineName
									: ""}
							</h2>
						</div>
						<div className="timeline-container" id="timeline-1">
							{this.state.timelineSelected2
								? this.state.timelineSelected2.events.map(eachEvent => (
										<div className="timeline-header">
											<h3 className="timeline-header__subtitle">
												{eachEvent.eventTitle}
											</h3>
											<h2 className="timeline__content-title">
												{eachEvent.eventDate}
											</h2>
											<img
												alt=""
												className="timeline__img"
												src={eachEvent.eventLinks}
											/>
											<p className="timeline__content-desc">
												{eachEvent.eventDescription}
											</p>
										</div>
								  ))
								: ""}
						</div>

						{/* second col */}
					</Col>

					{/* Third Col */}
					<Col md={4}>
						<div className="timeline-header">
							<select
								className="select-button"
								onChange={this.showTimelineInfo3}
							>
								{optionItems}
							</select>

							<h2 className="timeline-header__title">
								{this.state.timelineSelected3
									? this.state.timelineSelected3.timelineName
									: ""}
							</h2>
						</div>
						<div className="timeline-container" id="timeline-1">
							{this.state.timelineSelected3
								? this.state.timelineSelected3.events.map(eachEvent => (
										<div className="timeline-header">
											<h3 className="timeline-header__subtitle">
												{eachEvent.eventTitle}
											</h3>
											<h2 className="timeline__content-title">
												{eachEvent.eventDate}
											</h2>
											<img
												alt=""
												className="timeline__img"
												src={eachEvent.eventLinks}
											/>
											<p className="timeline__content-desc">
												{eachEvent.eventDescription}
											</p>
										</div>
								  ))
								: ""}
						</div>
						{/* third Col */}
					</Col>
				</Row>

				{/* main div */}
			</div>
		);
	}
}
