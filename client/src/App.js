import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';

import './styles/flexbox.css';
import './styles/main.css';
import './styles/modalbox.css';


function App() {
	const [gitData, setGitData] = useState([]);
	
	useEffect(() => {
		fetch("https://api.github.com/users/Alvarian/repos")
			.then(response => response.json())
			.then(json => setGitData(json));
	}, []);

	return (
		<BrowserRouter>
			<Route exact path='/' component={Home} />
			<Route path='/gallery' render={props => <Gallery gitData={gitData} />} />
			<Route path='/contact' component={Contact} />
		</BrowserRouter>
	);
}

export default App;
