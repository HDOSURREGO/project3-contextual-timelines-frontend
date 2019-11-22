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
							Occaecat do laboris labore veniam occaecat velit aliqua labore non
							aliquip ea.Lorem sit aliqua dolor ea nulla eiusmod nulla
							consectetur ex. Qui non amet nulla eu velit ipsum esse labore
							pariatur magna dolore amet dolore. Laborum occaecat commodo
							consequat exercitation do nulla consequat pariatur qui nisi
							pariatur adipisicing. Qui irure occaecat quis sint tempor.
							Excepteur eu nulla consequat non officia aliqua minim deserunt
							quis quis elit ut Lorem. Officia amet enim officia excepteur
							adipisicing deserunt amet.
						</p>
					</div>
					{/* <hr /> */}
					<Button variant="secondary">Let's get started</Button>
				</div>
				{/* </div>
				</div> */}​
			</div>
		);
	}
}
