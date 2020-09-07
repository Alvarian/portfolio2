import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar.js';
import Project from './components/Project.js';
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

  const handleButtonOverlay = (title, description, logic, url) => {
    setSynopsis({
      title, 
      description, 
      type: {
        logic, url
      }
    });
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
              <div className="type">
                {synopsis.type.logic ? 
                  <p>{synopsis.type.logic.split('/')[4] === 'javascript' && 'Vanilla Javascript'}</p>
                 :
                  <a href={synopsis.type.url} rel="noopener noreferrer" target="_blank">Visit the site!</a>
                }
              </div> 
              
              <div className="icons"></div>
            </div>
          </div>
        
          <div className="cards">
            { projects.length ? 
              <div className="gallery gall">
                {projects.map(project => (
                  <Project key={project.id} data={project} callbackForModal={modalContent} fillSynopsis={handleButtonOverlay} />           
                ))}
              </div>
             : 
              <div className="arounded verticled" style={{ height: "70%" }}>                      
                <div className="pulsate-css" style={{ width: "80px", height: "80px" }}></div>
              </div>
            }
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
