import React from 'react';

import Navbar from './components/Navbar.js';


function scrollUp(){
    let scrollStep = -window.scrollY / (1000 / 15),
		scrollInterval = setInterval(function(){
	        if ( window.scrollY !== 0 ) {
	            window.scrollBy( 0, scrollStep );
	        }
	        else clearInterval(scrollInterval); 
		}, 15);
}

function Home() {
	return (
		<div>
			<Navbar class={'amatic homeNav'} />

			<div className="amatic" id="scrolltop">
				<div className="school" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
					<h1 className="welcome">Welcome and ...</h1>
				</div>

				<div style={{justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
					<div style={{width: "100%", zIndex: 5}}>
						<div className="float" style={{backgroundColor: "wheat", display: "flex", justifyContent: "spaceAround", width: "100%"}}>
							<div className="des">
								<div style={{display: "flex", height: "100%", justifyContent: "center", alignItems: "center"}}>
									<div className="icon"></div>
								</div>
								
								<div className="bio">
									<span style={{fontSize: "50pt", float: "left", marginRight: "20px"}}>Hi</span>
									Im Ivan, a web developer
									<p>I am enjoying this journey as a growing developer in The Big Apple. Having the fundamentals grasped...</p>

									<p>I aspire to make an endless amount of cool and scalable applications, not just pertaining to website stacks</p>
								
									<p>Feel free to browse my work!</p>

									<p>presented in <a style={{fontSize: "10pt"}} className="pressStart" href="/projects">Gallery</a></p>
									
									<p>and <a rel="noopener noreferrer" className="orbi" href="https://github.com/Alvarian/INTRO" target="_blank">Github</a></p>
								</div>
							</div>
							
							<div className="down" style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "white", flex: 1, minWidth: "180px"}}>
								<p><a rel="noopener noreferrer" className="descriptionLinks anchor" href="/resume" id="btn">View my resume</a></p>
								<p><a rel="noopener noreferrer" className="descriptionLinks anchor" href="/contact">Contact me</a></p>
							</div>
						</div>
					</div>

					<div className="purp" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
						<h1 style={{textAlign: "center", margin: "0", fontSize: "34pt", color: "wheat"}}>Incorporated...</h1>
					</div>

					<div className="float" style={{display: "flex", justifyContent: "space-around", padding: "70px 0px", width: "100%"}}>
						<div className="bord">
							<h2>Commonly Used</h2>

							<div className="loopUsed">
								<i className="badges devicon-javascript-plain colored"></i>
								<i className="badges devicon-nodejs-plain colored"></i>
								<i className="badges devicon-css3-plain colored"></i>
								<i className="badges devicon-html5-plain colored"></i>
								<i className="badges devicon-python-plain colored"></i>
							</div>
						</div>

						<div className="bord">
							<h2>Tried and Understood</h2>

							<div className="loopUnderstood">
								<i className="badges devicon-redis-plain colored"></i>
								<i className="badges devicon-postgresql-plain colored"></i>
								<i className="badges devicon-jquery-plain-wordmark colored"></i>
								<i className="badges devicon-mongodb-plain-wordmark colored"></i>
								<i className="badges devicon-mysql-plain-wordmark colored"></i>
								<i className="badges devicon-amazonwebservices-plain-wordmark colored"></i>
							</div>
						</div>
					
						<div className="bord">
							<h2>Learning...</h2>

							<div className="loopLoading">
								<i className="badges devicon-cplusplus-plain colored"></i>
								<i className="badges devicon-rust-plain colored"></i>
								<i className="badges devicon-php-plain colored"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div style={{position: "relative"}}>
				<div style={{position: "absolute"}} className="theLib"></div>
				<div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
					<div className="footerBtns">
						<a rel="noopener noreferrer" href="https://github.com/Alvarian/INTRO" className="circle anchor" target="_blank"><i className="fab fa-github"></i></a>
						<a rel="noopener noreferrer" href="https://www.linkedin.com/in/alvarezivan88/" className="circle anchor" target="_blank"><i className="fab fa-linkedin-in"></i></a>
						<div className="circle anchor scrollUp" onClick={scrollUp}><i className="fas fa-arrow-up"></i></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
