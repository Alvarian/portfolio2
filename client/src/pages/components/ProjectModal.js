import React from 'react';

import useScript from './hooks/useScript';


function ProjectModal(props) {
	const status = useScript(props.content);
	
	const handleToggle = () => {
		window.Game = null;

		props.clear(null);
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
							<div className="slide-wrapper">
								{props.content.slides.reverse().map(slide => (
									<div key={slide.id}>
										<div>
											<img src={slide.image_url} />
										</div>

										<p>{slide.description}</p>
									</div>
								))}
							</div>
						</div>
					}
				</div>
			</div>
		</div>	
	) : null
}

export default ProjectModal;
