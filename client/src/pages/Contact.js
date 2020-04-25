import React, { useEffect, useState } from 'react';

import Navbar from './components/Navbar.js';
import ContactForm from './components/ContactForm.js';
import ThankyouOnSubmit from './components/ThankyouOnSubmit.js';


function Contact() {
	const [isSubmitted, setBool] = useState(false);

	const toggleBool = () => {
		setBool(!isSubmitted);
	};

	if (isSubmitted) {
		return (
			<div className="orbi">
				<Navbar class={'barcode contactNav'} />

				<ThankyouOnSubmit />
			</div>
		)
	} else {
		return (
			<div className="orbi">	
				<Navbar class={'barcode contactNav'} />

				<ContactForm toggleBool={toggleBool} />
			</div>
		)
	}
}

export default Contact;
