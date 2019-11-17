import React from "react";
import { Row, Col } from "reactstrap";
import "./TimelineCompare.css";

export default class TimelineCompare extends React.Component {
	render() {
		return (
			<div>
				<Row form className="firstTimeline">
					{/* First Col */}
					<Col md={4}>
						<div className="timeline-container" id="timeline-1">
							<div className="timeline_header">
								<h2 className="timeline-header-title">The Beatles</h2>
								<h3 className="timeline-header-subtitle">THE LEGACY</h3>
							</div>
							{/* change the class name = timeline for timeline-data */}
							<div className="timeline-data">
								{/* todo el container */}
								<div className="timeline-item">
									<div className="timeline__content">
										<img
											className="timeline__img"
											src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/The-Beatles-pixlr-920x584.jpg"
											alt="imagenes"
										/>
										<h2 className="timeline__content-title">1960</h2>
										<p className="timeline__content">
											The Beatles were an English rock band formed in Liverpool
											in 1960. With a line-up comprising John Lennon, Paul
											McCartney, George Harrison and Ringo Starr, they are
											regarded as the most influential band of all time.[1] The
											group were integral to the evolution of pop music into an
											art form and to the development of the counterculture of
											the 1960s.[2] Their sound, rooted in skiffle, beat and
											1950s rock and roll, incorporated elements of
											classNameical music and traditional pop in innovative
											ways. They also pioneered recording techniques and
											explored music styles ranging from ballads and Indian
											music to psychedelia and hard rock. As they continued to
											draw influences from a variety of cultural sources, their
											musical and lyrical sophistication grew, and they came to
											be seen as embodying the era's socio-cultural movements.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/*first col  */}
					</Col>

					{/* Second Col */}
					<Col md={4}>
						<div className="timeline-container" id="timeline-2">
							<div className="timeline-header">
								<h2 className="timeline-header__title">The Beatles</h2>
								<h3 className="timeline-header__subtitle">THE LEGACY</h3>
							</div>
							{/* change the class name = timeline for timeline-data */}
							<div className="timeline-data">
								<div className="timeline-item">
									<div className="timeline__content">
										<img
											className="timeline__img"
											src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/The-Beatles-pixlr-920x584.jpg"
											alt="imagenes"
										/>
										<h2 className="timeline__content-title">1960</h2>
										<p className="timeline__content-desc">
											The Beatles were an English rock band formed in Liverpool
											in 1960. With a line-up comprising John Lennon, Paul
											McCartney, George Harrison and Ringo Starr, they are
											regarded as the most influential band of all time.[1] The
											group were integral to the evolution of pop music into an
											art form and to the development of the counterculture of
											the 1960s.[2] Their sound, rooted in skiffle, beat and
											1950s rock and roll, incorporated elements of
											classNameical music and traditional pop in innovative
											ways. They also pioneered recording techniques and
											explored music styles ranging from ballads and Indian
											music to psychedelia and hard rock. As they continued to
											draw influences from a variety of cultural sources, their
											musical and lyrical sophistication grew, and they came to
											be seen as embodying the era's socio-cultural movements.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* second col */}
					</Col>

					{/* Third Col */}
					<Col md={4}>
						<div className="timeline-container" id="timeline-3">
							<div className="timeline-header">
								<h2 className="timeline-header__title">The Beatles</h2>
								<h3 className="timeline-header__subtitle">THE LEGACY</h3>
							</div>
							{/* Change the the class name = timeline for timeline-data */}
							<div className="timeline-data">
								<div className="timeline-item">
									<div className="timeline__content">
										<img
											className="timeline__img"
											src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/The-Beatles-pixlr-920x584.jpg"
											alt="imagenes"
										/>
										<h2 className="timeline__content-title">1960</h2>
										<p className="timeline__content-desc">
											The Beatles were an English rock band formed in Liverpool
											in 1960. With a line-up comprising John Lennon, Paul
											McCartney, George Harrison and Ringo Starr, they are
											regarded as the most influential band of all time.[1] The
											group were integral to the evolution of pop music into an
											art form and to the development of the counterculture of
											the 1960s.[2] Their sound, rooted in skiffle, beat and
											1950s rock and roll, incorporated elements of
											classNameical music and traditional pop in innovative
											ways. They also pioneered recording techniques and
											explored music styles ranging from ballads and Indian
											music to psychedelia and hard rock. As they continued to
											draw influences from a variety of cultural sources, their
											musical and lyrical sophistication grew, and they came to
											be seen as embodying the era's socio-cultural movements.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* third Col */}
					</Col>
				</Row>

				{/* main div */}
			</div>
		);
	}
}
