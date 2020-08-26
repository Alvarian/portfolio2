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
						{/*}
							{ props.content.style && console.log(props.content.style) &&
								<link rel="stylesheet" type="text/css" href={ props.content.style } />
							}
						*/}
							{ status === "ready" && window.Game.start(document.querySelector('.app')) } 
						</div>
					 : 
						<iframe title="jsx-a11y/iframe-has-title" src={ props.content.url } height="100%" width="100%" />
					}
				</div>
			</div>
		</div>	
	) : null
}

export default ProjectModal;
