import React from 'react';
import { Link } from "react-router-dom";
import ScriptTag from 'react-script-tag';

function ProjectList(props) {
  console.log(props.projects);

  return props.projects.map(proj => (
    <div>
    	<link rel="stylesheet" type="text/css" href="" />
		<h3>{proj.title}</h3>
		<p>{proj.description}</p>
		<ScriptTag isHydrating={true} type="text/javascript" src="" />
    </div>
  ));
}

export default ProjectList;