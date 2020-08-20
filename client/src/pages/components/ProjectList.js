import React from 'react';

import { Link } from "react-router-dom";


function ProjectList(props) {
	return props.data.map(project => (
		<div key={project.id}>
			<div className="dropCard">
				<div style={{position: 'relative'}} onClick={props.callbackForModal.bind(this, {url: project.deployed_url, logic: project.game_file, style: project.style_file})}>
					<div style={{backgroundImage: "url("+ project.icon_file +")"}} className="card"></div>
					<div className="article lay">
						<h2 className="clickOpen orbi">OPEN</h2>
					</div>
				</div>
				<div style={{height: '100px'}}></div>

				<a className="gitBTN" target="_blank" href={ project.git_url }><i className="fab fa-4x fa-github"></i></a>
			</div>
		</div>   
	))
}

export default ProjectList;