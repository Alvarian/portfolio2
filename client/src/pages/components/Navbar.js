import React, { useState } from 'react';
import useResize from './hooks/useResize';


function Navbar(props) {
	const [width, height] = useResize();

	const [isDisplayed, toggleDisplay] = useState(false);

	return (
		<nav className={"row spaced "+props.class} style={{backgroundColor: "black", color: "white"}}>
			<div className="menu lrg">
				<div className="menuLayer">
					<a className="bleach" href="/">Ivan Alvarez</a>

					{ width < 600 ?
						<div className="drop">
							<div className="dropBtn" onClick={() => toggleDisplay(!isDisplayed)}>
								<div></div>
								<div></div>
								<div></div>
							</div>

							<div className="dropMenu" style={{ display: isDisplayed ? 'block' : 'none' }}>
								<a className="bleach" href="/gallery">/projects</a>
								<a className="bleach" href="/contact">/contact</a>
							</div>
						</div>
					 :
					 	<div className="naver">
							<a className="bleach" href="/gallery">/projects</a>
							<a className="bleach" href="/contact">/contact</a>
						</div>
					}	

				</div>
			</div>
		</nav>
	);
}

export default Navbar;