import React from 'react';
import ScriptTag from 'react-script-tag';

function ProjectList(props) {
  console.log(props.projects);

  return props.projects.map(proj => (
    <div>
      <h3>{proj.title}</h3>
      <ScriptTag isHydrating={true} type="text/javascript" src="" />
    </div>
  ));
}

export default ProjectList;