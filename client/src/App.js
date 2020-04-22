import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import FontContextProvider from './contexts/FontContext.js';

import Home from './pages/Home.js';
import Gallery from './pages/Gallery.js';
import Contact from './pages/Contact.js';
import Navbar from './pages/components/Navbar.js';

import logo from './logo.svg';
import './styles/main.css';
import './styles/flexbox.css';
import './styles/modalbox.css';

function App() {
	return (
		<BrowserRouter>
			<FontContextProvider>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route path='/gallery' component={Gallery} />
				<Route path='/contact' component={Contact} />
			</FontContextProvider>
		</BrowserRouter>
	);
}

export default App;
