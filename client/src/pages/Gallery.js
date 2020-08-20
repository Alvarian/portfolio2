import React, { useState, useEffect, useContext } from 'react';

import Navbar from './components/Navbar.js';
import ProjectList from './components/ProjectList.js';
import ProjectModal from './components/ProjectModal.js';


function Gallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+"/api/projects")
      .then(response => response.json())
      .then(json => setProjects(json.msg))
  }, []);


  const [content, setContent] = useState();

  const modalContent = (projectModalPayload) => {
    setContent(projectModalPayload);
  };

  return (
    <div>
      <Navbar class={'pressStart galleryNav'} />

      <h1>Gallery</h1>

      <div id="app">
        <h1 className="orb codepro" style={{textAlign: "center"}}>Project Gallery</h1>
        <div className="row">
          <div className="synop">
            <h2 className="orb codepro">Synopsis</h2>
            <div style={{height: "70%", fontSize: "7pt", margin: 0}} className="pressStart betweened">
              <div style={{width: "100%"}}>
                <h3 className="title" style={{textDecoration: "underline", width: "100%"}}>Hover Over an App! >></h3>
                <p className="article description">Hover over an app! >></p>
              </div>
              <div className="type">Hover over an app! >></div> 
              <div className="icons"></div>   
            </div>
          </div>
        
          <div className="cards">
            <div className="gallery gall">
              <ProjectList data={projects} callbackForModal={modalContent} />           
            </div>
          </div>
        </div>
      </div>
{/*
*/}
      <ProjectModal content={content} clear={modalContent} />
    </div>
  );
}


export default Gallery;
