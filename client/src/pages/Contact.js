import React from 'react';


function Contact() {
  return (
	<div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundImage: "url('images/img_highest.jpg')", minHeight: "100vh", minWidth: "300px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed"}}>
		<h1 class="orbi">Contact</h1>

		<form class="contactForm" action="/contact" method="POST">
			<input class="orbi" style={{fontSize: "22pt",  color: "white", backgroundColor: "rgba(0,0,0,0.6)"}} name="name" type="text" placeholder="Your name" />
			<input class="orbi" style={{fontSize: "22pt",  color: "white", backgroundColor: "rgba(0,0,0,0.6)"}} name="email" type="email" placeholder="Your email" />
			<textarea class="orbi" style={{ color: "white", backgroundColor: "rgba(0,0,0,0.6)"}} name="message" id="" cols="30" rows="10" placeholder="Whats Up?"></textarea>
			<input class="orbi" style={{fontSize: "22pt",  color: "white", backgroundColor: "rgba(0,0,0,0.5)"}} type="submit" value="Submit" />
		</form>
	</div>
  );
}

export default Contact;
