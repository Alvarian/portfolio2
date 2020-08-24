import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';

import logo from './logo.svg';
import './styles/flexbox.css';
import './styles/main.css';
import './styles/modalbox.css';


function App() {
	return (
		<BrowserRouter>
			<Route exact path='/' component={Home} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/contact' component={Contact} />
		</BrowserRouter>
	);
}

export default App;
