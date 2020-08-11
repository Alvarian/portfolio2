import React from 'react';

import { Link } from "react-router-dom";
import ScriptTag from 'react-script-tag';


function isGameFile(props) {
	// if props.game_file
}

function ProjectList(props) {
	console.log(props.projects.game_file);

	const loadAndStartGame = () => {
		// $(document).ready(() => {
		// 	$('head').append('<link rel="stylesheet" type="text/css" href="{{ file.style_file }}">');
		// 	$(document).ready(() => {
		// 		{{ props.title }}.start(document.querySelector(`.{{ file.title }}_model`));
		// 	});
		// });	
	};

	const isGameFile = () => {
		{/* if (props.game_file) {
			if (proj.game_file == 'None'){} else {
				return (
					<div>
						<div class="modal-content">
							<a href="#" class="close {{ file.id }}_close">X</a>
							<div class="border">
								<div style="width: 100%; height: 100%" class="{{ file.title }}_model"></div>
							</div>
						</div>
			
						<ScriptTag onLoad={loadAndStartGame} isHydrating={true} type="text/javascript" src={props.game_file} />
					</div>
				)
			}
		} */}
	};

	return props.projects.map(proj => (		
		
		{/*<div style="display: none;" class="open_{{ file.id }}" id="modal">

			{isGameFile()}

			{% if file.deployed_url %}
				{% if file.deployed_url == 'None' %}
				{% else %}
					<div class="modal-content">
						<a href="#" class="close {{ file.id }}_close">X</a>
						<div class="border">
							<iframe frameborder="0" src="{{ file.deployed_url }}" height="100%" width="100%"></iframe>
						</div>
					</div>
				{% endif %}
			{% endif %}
		</div>

		<div class="dropCard">
			<div style="position: relative;">
				<div style="background-image: url('{{ file.icon_file }}');" class="card card_{{ file.id }}"></div>
				<div class="article lay lay_{{ file.id }}">
					<h2 class="clickOpen orbi card_{{ file.id }}">OPEN</h2>
				</div>
			</div>
			<div style="height: 100px;"></div>
			<!-- GITHUB button -->
			<a class="gitBTN" target="_blank" href={{ file.git_url }}><i class="fab fa-4x fa-github"></i></a>
		</div>

		<script>
			$(window).ready(() => {
				let clickWin = (e) => {
					let element = e.target.className;
					if(element == 'article lay lay_{{ file.id }}' || element == 'clickOpen orbi card_{{ file.id }}' || element == 'card card_{{ file.id }}'){
						$(".card_{{ file.id }}").css('transform', 'scale(1.2)');
						$(".lay_{{ file.id }}").css('display','flex');
						$(".description").text('{{ file.description }}');
						$(".title").text('{{ file.title }}');
						$(".type").text('{{ file.app_type }}');
						// console.log('over');
					} else {
						$(".card_{{ file.id }}").css('transform', 'scale(1)');
						$(".lay_{{ file.id }}").css('transform', 'scale(1)');
						$(".lay_{{ file.id }}").css('display', 'none');
						// console.log('out', element);
					}
				}
				if(window.innerWidth <= 600){
					$('.card_{{ file.id }}').on('click', (e) => {
						$(".card_{{ file.id }}").css('transform', 'scale(1.2)');
						$(".lay_{{ file.id }}").css('display','flex');
						$(".description").text('{{ file.description }}');
						$(".title").text('{{ file.title }}');
						$(".type").text('{{ file.app_type }}');
						console.log('lay');
					});
					$(window).on('click', (e) => {
						clickWin(e);
					});
					$(window).on('click', (e) => {
						let element = e.target.className;
						if(element == 'article lay lay_{{ file.id }}' || element == 'clickOpen orbi card_{{ file.id }}'){

							$(".open_{{ file.id }}").css('display','block');
						}
					});
				} else {
					$(window).on('click', (e) => {
						let element = e.target.className;
						if(element == 'article lay lay_{{ file.id }}' || element == 'clickOpen orbi card_{{ file.id }}'){

							$(".open_{{ file.id }}").css('display','block');
						}
					});
					$(window).on('mouseover', (e) => {
						clickWin(e);
					});
				}
			})	

			// When the user clicks on <span> (x), close the modal
			document.getElementsByClassName("{{ file.id }}_close")[0].onclick = () => {
				$(".open_{{ file.id }}").css('display','none');
			}
		</script>
			<ScriptTag isHydrating={true} type="text/javascript" src="" /> */}
	)); 
}

export default ProjectList;