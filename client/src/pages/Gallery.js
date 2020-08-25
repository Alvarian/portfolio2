import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar.js';
import ProjectList from './components/ProjectList.js';
import ProjectModal from './components/ProjectModal.js';


function Gallery() {
  const [projects, setProjects] = useState([]);
  const [synopsis, setSynopsis] = useState({
    title: 'Hover over an app! >>',
    description: 'Hover over an app! >>',
    type: 'Hover over an app! >>'
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL+"/api/projects")
      .then(response => response.json())
      .then(json => setProjects(json.msg))
  }, []);


  const [content, setContent] = useState();

  const modalContent = (projectModalPayload) => {
    setContent(projectModalPayload);
  };

  const handleHover = (title, description, logic, url) => {
    setSynopsis({title, description, type: (logic) ? 'Logic': 'Deployed'});
  };

  return (
    <div>
      <Navbar class={'pressStart galleryNav'} />
      
      <div id="app">
        <h1 className="orb codepro" style={{textAlign: "center"}}>Project Gallery</h1>
        <div className="row">
          <div className="synop">
            <h2 className="orb codepro">Synopsis</h2>
            <div style={{height: "70%", fontSize: "7pt", margin: 0}} className="pressStart betweened">
              <div style={{width: "100%"}}>
                <h3 className="title" style={{textDecoration: "underline", width: "100%"}}>{synopsis.title}</h3>
                <p className="article description">{synopsis.description}</p>
              </div>
              <div className="type">{synopsis.type}</div> 
              <div className="icons"></div>   
            </div>
          </div>
        
          <div className="cards">
            <div className="gallery gall">
              <ProjectList data={projects} callbackForModal={modalContent} fillSynopsis={handleHover} />           
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
