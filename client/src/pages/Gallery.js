import React, { useState, useEffect, useContext } from 'react';
import { FontContext } from '../contexts/FontContext.js';

import ProjectList from './components/ProjectList.js';


function Gallery() {
  const [projects, setProjects] = useState([]);
  const { setFont } = useContext(FontContext);

  useEffect(() => {
    setFont('pressStart galleryNav');

    fetch(process.env.REACT_APP_API_URL+"/projects")
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
