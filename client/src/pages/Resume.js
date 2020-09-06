import React from 'react';

import useResize from './components/hooks/useResize';
import Navbar from './components/Navbar.js';


export default function Resume() {
	const [width] = useResize();

	return (
		<div className='resumeBackground'>
			<Navbar class={'verdana resumeNav'} />

			{width > 600 &&
				<a style={{position: 'absolute'}} href="https://docs.google.com/document/d/1E8sK0bPbW3zeLZb4_ld9EtZ4x_iNW_nqJhrPTvbSZW4/edit#">
					For all other qualifications please vist my Minified Resume
				</a>
			}
			<div style={{display: 'flex', justifyContent: 'center', overflow: 'hidden', height: '100vh'}}>	
				<img className='prettyResume' src="./images/prettifiedResume9_20.jpg" alt="" />

				{width <= 600 &&
				<a style={{position: 'absolute'}} href="https://docs.google.com/document/d/1E8sK0bPbW3zeLZb4_ld9EtZ4x_iNW_nqJhrPTvbSZW4/edit#">
					For all other qualifications please vist my Minified Resume
				</a>
			}
			</div>


		</div>
	)
}