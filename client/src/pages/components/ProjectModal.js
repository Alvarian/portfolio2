import React, { useState, useEffect } from 'react';

import useScript from './hooks/useScript';
import useResize from './hooks/useResize';

import { Bar, HorizontalBar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

import '../../styles/slideShow.css';


function ProjectModal(props) {
	const status = useScript(props.content);
	const [slideIndex, setSlideIndex] = useState(0);
	const [showCover, setCover] = useState(true);
	const [gitLanguages, setGitLanguages] = useState([]);
	const [width] = useResize();


	useEffect(() => {
		const slides = document.getElementsByClassName("slide");

		for (let i = 0; i < slides.length; i++) {
			if (i === slideIndex) {
				slides[i].style.display = "flex";
			} else {
				slides[i].style.display = "none";
			}
		}

		if (props.content && !gitLanguages.length) {
			if (props.content.gitData) {
				fetch(props.content.gitData.languages_url)
					.then(response => response.json())
					.then(json => {
						let setted = [];
						for (const key in json) {
							setted.push({
								x: key,
								y: json[key]
							});
						}

						setted.total = setted.reduce((a, b) => (a+json[b.x]), 0);

						setGitLanguages(setted);
					});
			}
		}
	});

	const handleToggle = () => {
		window.Game = null;

		setSlideIndex(0);

		setCover(true);

		setGitLanguages([]);

		props.clear(null);
	};

	const plusSlides = (n) => {
		if (slideIndex + n > props.content.slides.length - 1) {
			setSlideIndex(0);
		} else if (slideIndex + n < 0) {
			setSlideIndex(props.content.slides.length - 1);
		} else {
			setSlideIndex(slideIndex + n);
		}
	};

	const getDate = (string) => {
		const [month, day, year] = new Date(string).toLocaleDateString("en-US").split("/");

		return `${month}/${day}/${year}`;
	};

	const getRandomColor = (arr) => {
		if (!arr.length) {
			return ["#" + ("FFFFFF" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6)]
		}
		return arr.map(() => {
			return "#" + ("FFFFFF" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
		});
	};

	const getLanguageTitle = (arr) => {
		if (!arr.length && props.content) {
			if (props.content.logic) {
				return [props.content.logic.split('/')[4].charAt(0).toUpperCase() + props.content.logic.split('/')[4].slice(1)];
			}
		}

		return arr.map(g => g.x);
	};

	const HOptions = {
	  title: {
	  	display: true,
	  	text: "Languages Used",
	  	fontSize: "25"
	  },
	  legend: {
	  	display: false
	  },
	  scales: {
	    xAxes: [
	      {
	        ticks: {
	          beginAtZero: true
	        },
	      },
	    ],
	  },
	};

	const VOptions = {
	  title: {
	  	display: true,
	  	text: "Languages Used",
	  	fontSize: "25"
	  },
	  legend: {
	  	display: false
	  },
	  scales: {
	    yAxes: [
	      {
	        ticks: {
	          beginAtZero: true
	        },
	      },
	    ],
	  },
	  maintainAspectRatio: false
	};

	const chartData = {
	  labels: getLanguageTitle(gitLanguages),
	  datasets: [
	    {
	      label: "Percentage",
	      data: (!gitLanguages.length && props.content) ? [100] : gitLanguages.map(g => Math.round((g.y/gitLanguages.total)*10000)/100 ),
	      backgroundColor: getRandomColor(gitLanguages),
	      borderColor: getRandomColor(gitLanguages),
	      borderWidth: 1,
	    }
	  ],
	};

	return props.content ? (
		<div id="modal">
			<div className="modal-content">
				<div className="close" onClick={ handleToggle }>X</div>

				<div className="border">
					<motion.div
						variants={{
							visible: {
								opacity: 1,
								transition: {
									duration: 1
								},
							},
							hidden: {
								opacity: 0,
								display: "none"
							},
						}}
						initial="visible"
						animate={showCover ? "visible" : "hidden"}
						className="modal-cover"
					>
						<div>
							<h1 className="chart-title">{props.content.title}</h1>

							Created at: {(props.content.gitData) ? getDate(props.content.gitData.created_at) : "N/A"} <br />
							Last Update: {(props.content.gitData) ? getDate(props.content.gitData.updated_at) : "N/A"}
						</div>

						<div className="chart-details">
							{ width > 500 ?
								<HorizontalBar
								data={chartData}
								options={HOptions}
								/>
								:
								<Bar
								data={chartData}
								options={VOptions}
								height={320}
								/>
							}
						</div>

						<button className="chart-continue" onClick={() => setCover(false)}>Continue</button>
					</motion.div>

					{/*App loads here*/}
					{ props.content.logic ?
						<div className="app">
							{ status === "ready" && window.Game.start(document.querySelector('.app')) }

							{ props.content.style && <link rel="stylesheet" type="text/css" href={props.content.style} /> }
						</div>
					 :
					  props.content.url ?
						<iframe title="jsx-a11y/iframe-has-title" src={ props.content.url } height="100%" width="100%" />
					 :
						<div className="slide-container">
							{ props.content.slides.map((slide, index) => (
								<div key={index} className="slide-wrapper">
									<div className="slide fade">
										<div className="numbertext">{index+1} / {props.content.slides.length}</div>

										<img src={slide.image_url} alt="shtup" />

										<p className="text">{slide.description}</p>
									</div>
								</div>
							)) }

							<button className="prev" onClick={plusSlides.bind(this, -1)}>&#10094;</button>
							<button className="next" onClick={plusSlides.bind(this, 1)}>&#10095;</button>
						</div>
					}
				</div>
			</div>
		</div>
	) : null
}

export default ProjectModal;
