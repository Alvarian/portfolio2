import React, { useState, useEffect } from 'react';

import useScript from './hooks/useScript';

import '../../styles/slideShow.css';


function ProjectModal(props) {
	const status = useScript(props.content);
	const [slideIndex, setSlideIndex] = useState(0);

	useEffect(() => {
		const slides = document.getElementsByClassName("slide");
		
		for (let i = 0; i < slides.length; i++) {
			if (i === slideIndex) {
				slides[i].style.display = "flex";
			} else {
				slides[i].style.display = "none";
			}
		}
	});
	
	const handleToggle = () => {
		window.Game = null;

		props.clear(null);
	};

	const plusSlides = (n) => {
		console.log(n)
		if (slideIndex + n > props.content.slides.length - 1) {
			setSlideIndex(0);
		} else if (slideIndex + n < 0) {
			setSlideIndex(props.content.slides.length - 1);
		} else {
			setSlideIndex(slideIndex + n);	
		}
	};

	return props.content ? (
		<div id="modal">
			<div className="modal-content">
				<div className="close" onClick={ handleToggle }>X</div>
				<div className="border">
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
