import React, { useState, useEffect } from 'react';

import ScriptTag from 'react-script-tag';


function ProjectModal(props) {
	const [isOpen, toggleOpen] = useState(false);

	useEffect(() => toggleOpen(!!props.content));

	const handleToggle = () => props.clear(null);
	
	return isOpen && props.content ? (
		<div id="modal">
			<div className="modal-content">
				<a href="#" className="close" onClick={handleToggle}>X</a>
				<div className="border">
					{/*App loads into here*/}
					{ props.content.logic ?
						<div className="app">
							{ props.content.style &&
								<link rel="" href="" />
							}

							<ScriptTag isHydrating={true} type="text/javascript" src="" />
						</div>
					 : 
						<iframe />
					}
				</div>
			</div>
		</div>	
	) : null
}

export default ProjectModal;
