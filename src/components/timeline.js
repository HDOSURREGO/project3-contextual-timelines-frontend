import React from "react";
import "./Timeline.css";
import axios from "axios";
// import { Link } from "react-router-dom";

export default class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timelineSelected: null,
			timelineName: "",
			eventTitle: "",
			eventDate: { type: Date },
			eventDescription: "",
			timelines: [],
			events: []
		};
		this.showTimelineInfo = this.showTimelineInfo.bind(this);
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

	showTimelineInfo(event) {
		console.log("Este es el id del timeline seleccionado:", event.target.value);
		const selectedTimelines = this.state.timelines.filter(
			chosenTimeline => chosenTimeline._id === event.target.value
		);

		this.setState({
			timelineSelected: selectedTimelines[0]
		});

		// console.log(
		// 	"Despues de cambiar el state dentro de showTimelineInfo es:",
		// 	this.state
		// );
	}

	render() {
		console.log("After componentDidMount the state is :", this.state);
		let timelinesList = this.state.timelines;
  	let optionItems = timelinesList.map(chosenTimeline => (
			<option value={chosenTimeline._id} key={chosenTimeline._id}>
				{chosenTimeline.timelineName}
			</option>
		));
		optionItems.push(
			<option value="unselected" key="unselected">
				Select a timeline
			</option>
		);

		// {
		/* // value={this.state.value} onChange={e => this.handleChange(e)}> onClick={() => this.showTimelineInfo()} value={chosenTimeline._id}*/
		// }
		return (
			
				<div>
					<select className="select-button" onChange={this.showTimelineInfo}>
						{optionItems}
					</select>
				</div>
				<div className="timeline-header">
					<h2 className="timeline-header__title">
						{this.state.timelineSelected
							? this.state.timelineSelected.timelineName
							: ""}
					</h2>
				</div>
				<div className="timeline-container" id="timeline-1">
					{this.state.timelineSelected
						? this.state.timelineSelected.events.map(eachEvent => (
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
										src="../public/nina_bonita.jpg"
									/>
									<p className="timeline__content-desc">
										{eachEvent.eventDescription}
									</p>
								</div>
						  ))
						: ""}
				</div>

				{/* <div className="timeline">
						
							<div className="timeline__content">
								<img
									className="timeline__img"
									src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/09/The-Beatles-pixlr-920x584.jpg"
									alt="imagenes"
								/>
								<h2 className="timeline__content-title">1960</h2>
								<p className="timeline__content-desc">
									The Beatles were an English rock band formed in Liverpool in
									1960. With a line-up comprising John Lennon, Paul McCartney,
									George Harrison and Ringo Starr, they are regarded as the most
									influential band of all time.[1] The group were integral to
									the evolution of pop music into an art form and to the
									development of the counterculture of the 1960s.[2] Their
									sound, rooted in skiffle, beat and 1950s rock and roll,
									incorporated elements of classNameical music and traditional
									pop in innovative ways. They also pioneered recording
									techniques and explored music styles ranging from ballads and
									Indian music to psychedelia and hard rock. As they continued
									to draw influences from a variety of cultural sources, their
									musical and lyrical sophistication grew, and they came to be
									seen as embodying the era's socio-cultural movements.
								</p>
							</div>
						</div> */}

				{/* ========================================================================================================= */}
				{/* <div className="timeline-item" data-text="History of Music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://www.grammy.com/sites/com/files/styles/image_landscape_hero/public/beatles-hero-514890404.jpg?itok=0lUBO7km"
								/>
								<h2 className="timeline__content-title">1957</h2>
								<p className="timeline__content-desc">
									In March 1957, John Lennon, then aged sixteen, formed a
									skiffle group with several friends from Quarry Bank High
									School in Liverpool. They briefly called themselves the
									Blackjacks, before changing their name to the Quarrymen after
									discovering that a respected local group was already using the
									other name.[3] Fifteen-year-old Paul McCartney joined them as
									a rhythm guitarist shortly after he and Lennon met that
									July.[4] In February 1958, McCartney invited his friend George
									Harrison to watch the band. The fifteen-year-old auditioned
									for Lennon, impressing him with his playing, but Lennon
									initially thought Harrison was too young for the band. After a
									month of Harrison's persistence, during a second meeting
									(arranged by McCartney), he performed the lead guitar part of
									the instrumental song "Raunchy" on the upper deck of a
									Liverpool bus,[5] and they enlisted him as their lead
									guitarist.[6][7]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of Music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/08/2015TheBeatles_1966_Getty_3278896170315-2.jpg"
								/>
								<h2 className="timeline__content-title">1959</h2>
								<p className="timeline__content-desc">
									By January 1959, Lennon's Quarry Bank friends had left the
									group, and he began his studies at the Liverpool College of
									Art.[8] The three guitarists, billing themselves at least
									three times as Johnny and the Moondogs,[9] were playing rock
									and roll whenever they could find a drummer.[10] Lennon's art
									school friend Stuart Sutcliffe, who had just sold one of his
									paintings and was persuaded to purchase a bass guitar, joined
									in January 1960, and it was he who suggested changing the
									band's name to Beatals, as a tribute to Buddy Holly and the
									Crickets.[11][12] They used this name until May, when they
									became the Silver Beetles, before undertaking a brief tour of
									Scotland as the backing group for pop singer and fellow
									Liverpudlian Johnny Gentle. By early July, they had
									refashioned themselves as the Silver Beatles, and by the
									middle of August shortened the name to The Beatles.[13]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of Music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTY2MTcyNTE2MzQyMDQ4Mzk4/the-beatles-rehearse-for-that-nights-royal-variety-performance-at-the-prince-of-wales-theatre-4th-november-1963-the-queen-mother-will-attend-photo-by-central-press_hulton-archive_getty-images.jpg"
								/>
								<h2 className="timeline__content-title">1961</h2>
								<p className="timeline__content-desc">
									In 1961, during their second Hamburg engagement, Kirchherr cut
									Sutcliffe's hair in the "exi" (existentialist) style, later
									adopted by the other Beatles.[24][25] When Sutcliffe decided
									to leave the band early that year and resume his art studies
									in Germany, McCartney took up the bass.[26] Producer Bert
									Kaempfert contracted what was now a four-piece group until
									June 1962, and he used them as Tony Sheridan's backing band on
									a series of recordings for Polydor Records.[12][27] As part of
									the sessions, the Beatles were signed to Polydor for one
									year.[28] Credited to "Tony Sheridan & the Beat Brothers", the
									single "My Bonnie", recorded in June 1961 and released four
									months later, reached number 32 on the Musikmarkt chart.[29]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-218776-rexfeatures_11258b.jpg?resize=900,600&w=450"
								/>
								<h2 className="timeline__content-title">1962</h2>
								<p className="timeline__content-desc">
									Martin's first recording session with the Beatles took place
									at EMI's Abbey Road Studios in London on 6 June 1962.[38]
									Martin immediately complained to Epstein about Best's poor
									drumming and suggested they use a session drummer in his
									place.[39] Already contemplating Best's dismissal,[40] the
									Beatles replaced him in mid-August with Ringo Starr, who left
									Rory Storm and the Hurricanes to join them.[38] A 4 September
									session at EMI yielded a recording of "Love Me Do" featuring
									Starr on drums, but a dissatisfied Martin hired drummer Andy
									White for the band's third session a week later, which
									produced recordings of "Love Me Do", "Please Please Me" and
									"P.S. I Love You".[38]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://miro.medium.com/max/12106/1*zdmpyfSSsyJbUWP3wU0onw.jpeg"
								/>
								<h2 className="timeline__content-title">1963</h2>
								<p className="timeline__content-desc">
									On 11 February 1963, the Beatles recorded ten songs during a
									single studio session for their debut LP, Please Please Me.
									The album was supplemented by the four tracks already released
									on their first two singles. Martin originally considered
									recording the Beatles' debut LP live at The Cavern Club, but
									after deciding that the building's acoustics were inadequate,
									he elected to simulate a "live" album with minimal production
									in "a single marathon session at Abbey Road".[51]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://media4.s-nbcnews.com/j/streams/2014/January/140123/2D11403865-today-beatles-140123.fit-760w.jpg"
								/>
								<h2 className="timeline__content-title">1964</h2>
								<p className="timeline__content-desc">
									On 7 February 1964, the Beatles left the United Kingdom with
									an estimated 4,000 fans gathered at Heathrow, waving and
									screaming as the aircraft took off.[89] Upon landing at New
									York's John F. Kennedy Airport, an uproarious crowd estimated
									at 3,000 greeted them.[90] They gave their first live US
									television performance two days later on The Ed Sullivan Show,
									watched by approximately 73 million viewers in over 23 million
									households,[91] or 34 per cent of the American population.
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://secure.i.telegraph.co.uk/multimedia/archive/02467/beatles1963_2467618b.jpg"
								/>
								<h2 className="timeline__content-title">1965</h2>
								<p className="timeline__content-desc">
									In early 1965, following a dinner with Lennon, Harrison and
									their wives, Harrison's dentist John Riley secretly added LSD
									to their coffee.[124] Lennon described the experience: "It was
									just terrifying, but it was fantastic. I was pretty stunned
									for a month or two."[125] He and Harrison subsequently became
									regular users of the drug, joined by Starr on at least one
									occasion. Harrison's use of psychedelic drugs encouraged his
									path to meditation and Hinduism. He commented: "For me, it was
									like a flash. The first time I had acid, it just opened up
									something in my head that was inside of me, and I realized a
									lot of things. I didn't learn them because I already knew
									them, but that happened to be the key that opened the door to
									reveal them.
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2019/01/30/931/524/694940094001_5996402045001_5996401038001-vs.jpg?ve=1&tl=1"
								/>
								<h2 className="timeline__content-title">1966</h2>
								<p className="timeline__content-desc">
									On 25 June 1967, the Beatles performed their forthcoming
									single, "All You Need Is Love", to an estimated 350 million
									viewers on Our World, the first live global television link.
									Released a week later, during the Summer of Love, the song was
									adopted as a flower power anthem.[207] Two months later, the
									group suffered a loss that threw their career into turmoil.
									Having been introduced to Maharishi Mahesh Yogi only the
									previous night in London, on 25 August they travelled to
									Bangor for his Transcendental Meditation retreat.
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://townsquare.media/site/295/files/2013/08/Fox-Photos-Getty-Images.jpg?w=980&q=75"
								/>
								<h2 className="timeline__content-title">1967</h2>
								<p className="timeline__content-desc">
									On 25 June 1967, the Beatles performed their forthcoming
									single, "All You Need Is Love", to an estimated 350 million
									viewers on Our World, the first live global television
									link.[206] Released a week later, during the Summer of Love,
									the song was adopted as a flower power anthem.[207] Two months
									later, the group suffered a loss that threw their career into
									turmoil. Having been introduced to Maharishi Mahesh Yogi only
									the previous night in London, on 25 August they travelled to
									Bangor for his Transcendental Meditation retreat. Two days
									later, their manager's assistant, Peter Brown, phoned to
									inform them that Epstein, only thirty-two years old, had died.
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://www.biography.com/.image/t_share/MTY2MTcyNTI4NjkwMDc5Mzc0/the-beatles-circa-1963-paul-mccartney-holds-a-cigarette-others-are-left-to-right-ringo-starr-george-harrison-1943---2001-and-john-lennon-photo-by-cbs-photo-archivegetty-images.jpg"
								/>
								<h2 className="timeline__content-title">1968</h2>
								<p className="timeline__content-desc">
									In January 1968, the Beatles filmed a cameo for the animated
									movie Yellow Submarine, which featured cartoon versions of the
									band members and a soundtrack with eleven of their songs,
									including four unreleased studio recordings that made their
									debut in the film.[217] Released in June 1968, the film was
									praised by critics for its music, humour and innovative visual
									style.[218] It would be seven months, however, before its
									soundtrack album appeared.[219]
								</p>
							</div>
						</div>
						<div className="timeline-item" data-text="History of music">
							<div className="timeline__content">
								<img
									alt=""
									className="timeline__img"
									src="https://media3.s-nbcnews.com/j/newscms/2018_08/2339446/180223-the-beatles-recording-studio-1967-ew-1213p_f5b9b6772810425fdc3491b9d9829f51.fit-760w.jpg"
								/>
								<h2 className="timeline__content-title">1970</h2>
								<p className="timeline__content-desc">
									Lennon, McCartney, Harrison and Starr all released solo albums
									in 1970. Their solo records sometimes involved one or more of
									the others;[279] Starr's Ringo (1973) was the only album to
									include compositions and performances by all four ex-Beatles,
									albeit on separate songs. With Starr's participation, Harrison
									staged the Concert for Bangladesh in New York City in August
									1971.[280] Other than an unreleased jam session in 1974, later
									bootlegged as A Toot and a Snore in '74, Lennon and McCartney
									never recorded together again.[281].
								</p>
							</div>
						</div> */}
			</div>
		);
	}
}
