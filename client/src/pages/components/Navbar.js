import React, { useContext } from 'react';


function Navbar(props) {
	return (
		<nav className={"row spaced "+props.class} style={{backgroundColor: "black", color: "white"}}>
			<div className="menu lrg">
				<div className="menuLayer">
					<a className="bleach" href="/">Ivan Alvarez</a>

					<div className="naver">
						<a className="bleach" href="/gallery">/projects</a>
						<a className="bleach" href="/contact">/contact</a>
					</div>

					<div className="drop" style={{display: "none"}}></div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;