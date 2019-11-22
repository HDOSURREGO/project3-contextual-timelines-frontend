import React, { Component } from "react";
import "./Timeline.css";
import axios from "axios";

export default class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineName: "",
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			eventLinks: [],
			timelines: [],
			events: []
		};
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

	showTimelineInfo() {
		console.log("Show TimelifeInfo corriendo");
		// 	if (this.state.timelines)
		// 		return this.state.events.map((event, i) => {
		// 			return (
		// 				<div className="item-list">
		// 					<Link to={`/event/${event._id}`} key={i}>
		// 						<div className="listTitles">{event.eventTitle}</div>
		// 					</Link>
		// 				</div>
		// 			);
		// 		});
		// }
	}

	// handleChange(event) {
	// 	console.log("handleChange corriendo y el id es:", event.target.value);

	// 	this.setState({ value: event.target.value }, () => {
	// 		this.props.history.push(`/timeline/showTimeline/${this.state.value}`);
	// 	});
	// 	// alert("You'll never have me!");
	// }

	render() {
		console.log("Now the state is:", this.state);
		let timelinesList = this.state.timelines;
		let optionItems = timelinesList.map((chosenTimeline) => 
			<option  key={chosenTimeline._id} value={chosenTimeline._id}>
				{chosenTimeline.timelineName}
			</option>
		);
		// {
		/* // value={this.state.value} onChange={e => this.handleChange(e)}> */
		// }
		return (
			
				<div>
					<div className="selectOpt">
					<select  onClick={() => this.showTimelineInfo()}>{optionItems}</select>
					</div>
				</div>
				
				
		
		);
	}
}
