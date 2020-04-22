import React, { useContext } from 'react';
import { FontContext } from '../../contexts/FontContext.js';

function Navbar() {
	const { font } = useContext(FontContext);

	console.log('font used:', font);

	return (
		<nav className={"row spaced "+font} style={{backgroundColor: "black", color: "white"}}>
			<div className="menu lrg">
				<div className="menuLayer">
					<div>Ivan Alvarez</div>

					<div className="naver">
						<a href="/">/home</a>
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