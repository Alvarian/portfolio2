import React from 'react';
import ReactTooltip from 'react-tooltip';

import useResize from './components/hooks/useResize';
import Navbar from './components/Navbar.js';


export default function Resume() {
	const [width] = useResize();

	return (
		<div className='resumeBackground'>
			<Navbar class={'verdana resumeNav'} />

			<div className='resumeBody'>	
				<img className='prettyResume' src="./images/prettifiedResume9_20.jpg" alt="" />

				{width <= 600 &&
					<div className="resumeBottomBtns">
						<a data-tip="Full resume version in google drive!" href="https://drive.google.com/file/d/1tNZYNfO8NPjIwHL6jaLXQJwZR2QSrKWg/view?usp=sharing">
							<i className="bottomBtn fab fa-2x fa-google-drive"></i>
						</a>

						<a data-tip="Download displayed version(jpg)" style={{display: 'flex', justifyContent: 'center'}} href="./images/prettifiedResume9_20.jpg" download><i className="bottomBtn fas fa-2x fa-file-download"></i></a>
			
						<ReactTooltip />
					</div>
				}
			</div>
			
			{width > 600 &&
				<div style={{
					position: 'fixed', 
					transform: 'translate(60%, -550%)',
					display: 'flex', 
					flexDirection: 'column',
					justifyContent: 'space-between', 
					height: '120px'
				}}>
					<a data-tip="Full resume version in google drive!" href="https://docs.google.com/document/d/1E8sK0bPbW3zeLZb4_ld9EtZ4x_iNW_nqJhrPTvbSZW4/edit#">
						<i className="fab bottomBtn fa-3x fa-google-drive"></i>
					</a>

					<a data-tip="Download displayed version(jpg)" style={{display: 'flex', justifyContent: 'center'}} href="./images/prettifiedResume9_20.jpg" download><i className="bottomBtn fas fa-3x fa-file-download"></i></a>
					
					<ReactTooltip />
				</div>
			}
		</div>
	)
}
