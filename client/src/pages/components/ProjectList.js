import React from 'react';


function ProjectList(props) {
	return props.data.map(project => (
		<div key={project.id}>
			<link rel="stylesheet" type="text/css" href={project.style_file}>
			<div className="dropCard">
				<div style={{position: 'relative'}} 
					onClick={props.callbackForModal.bind(this, {url: project.deployed_url, logic: project.game_file, style: project.style_file})}
					onMouseEnter={props.fillSynopsis.bind(this, project.title, project.description, project.game_file, project.deployed_url)}
				>
					<div style={{backgroundImage: "url("+ project.icon_file +")"}} className="card"></div>
					
					<div className="article lay">
						<h2 className="clickOpen orbi">OPEN</h2>
					</div>
				</div>
				<div style={{height: '100px'}}></div>

				<a rel="noopener noreferrer" className="gitBTN" target="_blank" href={ project.git_url }><i className="fab fa-4x fa-github"></i></a>
			</div>
		</div>   
	))
}

export default ProjectList;