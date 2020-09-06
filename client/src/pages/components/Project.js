import React, { useState } from 'react';
import useResize from './hooks/useResize';


function Project(props) {
	const project = props.data;

	const [width] = useResize();
	const [isDisplayed, setDisplay] = useState({display: 'none'});


	const handleOpenLayoutAndFillSynop = (title, description, game_file, deployed_url) => {
		setDisplay({display: 'flex'});

		props.fillSynopsis(title, description, game_file, deployed_url)
	};

	const handleOpenModal = (e, payload) => {
		props.callbackForModal(payload);
	};

	return (
		<div>	
			<div className="dropCard">

				{width < 600 ?	
					<div style={{position: "relative"}} 
						onClick={handleOpenLayoutAndFillSynop.bind(this, project.title, project.description, project.game_file, project.deployed_url)}
					>
						<div style={{backgroundImage: "url("+ project.icon_file +")"}} className="card"></div>
						
						<div className="article lay">
							<h2 className="clickOpen orbi" 
								onClick={handleOpenModal.bind(this, {
									url: project.deployed_url, 
									logic: project.game_file, 
									style: project.style_file
								})
							}>OPEN</h2>
						</div>
					</div>
				 :
				 	<div style={{position: "relative"}} 
						onMouseEnter={handleOpenLayoutAndFillSynop.bind(this, project.title, project.description, project.game_file, project.deployed_url)}
						onMouseLeave={setDisplay.bind(this, {display: 'none'})}
					>
						<div style={{backgroundImage: "url("+ project.icon_file +")"}} className="card"></div>
						
						<div className="article lay"
							style={isDisplayed}
							onClick={handleOpenModal.bind(this, {
								url: project.deployed_url, 
								logic: project.game_file, 
								style: project.style_file
							})
						}>
							<h2 className="clickOpen orbi">OPEN</h2>
						</div>
					</div>
				}

				<a rel="noopener noreferrer" className="gitBTN" target="_blank" href={ project.git_url }><i className="fab fa-4x fa-github"></i></a>
			</div>
		</div>
	)
}

export default Project;