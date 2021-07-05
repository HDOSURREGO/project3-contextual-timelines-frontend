import React from "react";
import "./Home.css";
import { Button } from "reactstrap";

export default class Home extends React.Component {
	render() {
		return (
			<div>
				{/* <div class="row">
					<div className="col-lg-12"> */}
				<div id="content">
					<h1>Contextual Timelines</h1>
					<div className="text-line">
						<p>
							Historical context is an important part of life and literature,
							without it memories, stories, and characters have less meaning.
							When writers are working on their stories, they need to
							contextualize their characters according to time they lived in,
							watching the way they talk, the way they dress, and all the
							relevant events that were happening socially and politically
							during that time. With the help of this app, writers of any kind
							of stories can organize the information they have about the time
							the characters are living in and make stories that are more
							attached to reality. Welcome and Enjoy!
						</p>
					</div>
					<Button variant="secondary">Let's get started</Button>
				</div>
				{/* </div>
				</div> */}​
			</div>
		);
	}
}
