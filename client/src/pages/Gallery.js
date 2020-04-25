import React, { useState, useEffect, useContext } from 'react';

import Navbar from './components/Navbar.js';
import ProjectList from './components/ProjectList.js';


function Gallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+"/projects")
      .then(response => response.json())
      .then(json => setProjects(json))
  }, []);

  return (
    <div>
      <Navbar class={'pressStart galleryNav'} />

      <h1>Gallery</h1>

      <ProjectList projects={projects} />  
    </div>
  );
}

export default Gallery;
