import React, { useState, useEffect } from 'react';
import ProjectList from './components/ProjectList.js';


function Gallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
      .then(json => setProjects(json))
  }, []);

  return (
    <div>
      <h1>Gallery</h1>

      <ProjectList projects={projects} />  
    </div>
  );
}

export default Gallery;
