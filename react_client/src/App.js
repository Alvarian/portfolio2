import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Home />
        <Gallery />
        <Contact />
      </header>
    </div>
  );
}

export default App;
