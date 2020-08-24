import React, { useState, useEffect } from 'react';

import useScript from './hooks/useScript';


function ProjectModal(props) {
	const status = useScript(props.content, document.querySelector('.app'));

	const handleToggle = () => {
		window.Game = null;

		props.clear(null);
	};

	return props.content ? (
		<div id="modal">
			<div className="modal-content">
				<a href="#" className="close" onClick={ handleToggle }>X</a>
				<div className="border">
					{/*App loads here*/}
					{ props.content.logic ?
						<div className="app">
							{ props.content.style &&
								<link rel="stylesheet" href={ props.content.style } />
							}
							
							{ status === "ready" && window.Game.start(document.querySelector('.app')) } 
						</div>
					 : 
						<iframe src={ props.content.url } height="100%" width="100%" />
					}
				</div>
			</div>
		</div>	
	) : null
}

export default ProjectModal;
