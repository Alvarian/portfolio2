function Game() {
  let game, track, inject, ticDesc;
  this.getName = (e,ind) => {
    console.log('Rivalry');

    let openers = document.querySelectorAll(".card");
    let el = e.currentTarget;
    for(let opn of openers){
      // console.log(el);
        if(el === opn) {
          modal = document.querySelector(`.modal_${el.id}`);
          
          // INPUT GAME CONTAINER vvv
          document.querySelector(`.game_${ind}`).appendChild(game);
          // INPUT GAME CONTAINER ^^^

          document.querySelector(`.modal_${el.id}`).style.display = "block";
        }
    }
  }
  this.loopy = (arr, func) => {
    if(typeof arr == 'number'){
      for(let i = 1; i <= arr; i++){
        func(i);
      }      
    } else {
      for(let i = 0; i < arr.length; i++){
        func(i);
      }
    }
  }
  this.loadMsg = () => {
    ticDesc = document.createElement('div');
    ticDesc.setAttribute('class','ticDesc');
    let desc = ['Tic Tac Toe','Mark three in a row and you win!'];
    this.loopy(desc, (i) => {
      if(desc[i] == desc[0]){
        // console.log(desc[i]);
        let head = document.createElement('h2');
        head.innerText = `${desc[i]}`;
        ticDesc.appendChild(head);
      } else {
        // console.log(desc[i]);
        let parts = document.createElement('p');
        parts.innerText = `${desc[i]}`;
        ticDesc.appendChild(parts);      
      }
    }); 
  }
  this.box = () => {
    if (game.children.length === 3) return;
    document.querySelector('head').innerHTML += `<link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">`;
    // game.innerHTML += `<iframe width="0" height="0" src="https://www.youtube.com/embed/CMD-0h9EOG0?rel=0&amp;autoplay=1&amp;start=0" frameborder="0" allowfullscreen></iframe>`;  

    let block = document.createElement('div');
    block.setAttribute('class', 'block');
     
    this.loopy(9, (i) => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      div.setAttribute('id',`riv_${i}`);
      p.setAttribute('class','clear');
      div.addEventListener('click', () => this.turn(i));

      div.appendChild(p);
      block.appendChild(div);
    });

    track = document.createElement('div');
    track.setAttribute('id','track');
    track.innerText = "X's TURN!";

    let aspect = document.createElement('div');
    aspect.setAttribute('class','aspect');

    let ticTitle = document.createElement('div');
    ticTitle.setAttribute('class','ticTitle');
    ticTitle.innerText = "RIVALRY";

    inject = document.createElement('div');
    inject.setAttribute('class','inject');

    let jin = document.createElement('img');
    jin.setAttribute('id','jin');
    jin.src = 'https://a.wattpad.com/cover/65270851-352-k374438.jpg';
    let mugen = document.createElement('img');
    mugen.setAttribute('id','mugen');
    mugen.src = 'https://vignette.wikia.nocookie.net/vsbattles/images/3/3c/Mugen.jpg/revision/latest?cb=20150824214045';

    inject.appendChild(jin);
    inject.appendChild(mugen);
    inject.appendChild(aspect);
    inject.appendChild(block);

    let ticBox = document.createElement('div');
    // ticBox.appendChild(ticTitle);
    ticBox.setAttribute('class','ticBox');
    ticBox.appendChild(inject);
    ticBox.appendChild(track);
    // ticBox.appendChild(clr);

    let ticBoard = document.createElement('div');
    ticBoard.setAttribute('class','ticBoard');

    let background = document.createElement('div');
    background.setAttribute('class','bkgrd article centered');

    this.loopy(3, (i) => {
      let sideScores = document.createElement('div');
      sideScores.setAttribute('class','sideScores');

      let scoreX = document.createElement('div');
      scoreX.setAttribute('class','scoreX');
      let h1X = document.createElement('h3');
      h1X.innerText = "X";
      scoreX.appendChild(h1X);
      let ptX = document.createElement('div');
      scoreX.appendChild(ptX);

      let scoreO = document.createElement('div');
      scoreO.setAttribute('class','scoreO');
      let h1O = document.createElement('h3');
      h1O.innerText = "O";
      scoreO.appendChild(h1O);
      let ptO = document.createElement('div');
      scoreO.appendChild(ptO);

      let bottomScore = document.createElement('div');
      bottomScore.setAttribute('class','bottomScore');
 
      if(i == 3){
        bottomScore.appendChild(scoreO);
        bottomScore.appendChild(scoreX);

        background.appendChild(ticTitle);
        background.appendChild(ticBoard);
        background.appendChild(bottomScore);
      }
      else if(i == 2){
        sideScores.appendChild(scoreX);
        ticBoard.appendChild(sideScores);
      } 
      else if(i == 1) {
        sideScores.appendChild(scoreO);

        ticBoard.appendChild(sideScores);
        ticBoard.appendChild(ticBox);
      }
    });

    let clr = document.createElement('h2');
    let allToClr = document.getElementsByClassName('clear');
    clr.setAttribute('class','sword');
    clr.innerText = "Rematch?";
    clr.addEventListener('click', () => {
      let m = document.querySelector('#mugen');
      let j = document.querySelector('#jin');

      for(let i of allToClr){
        // console.log(i);
        i.innerText = " ";
      }
      m.style.display = 'none';
      j.style.display = 'none';
    });

    background.appendChild(clr);

    game.appendChild(background);      
  }
  this.showDesc = (name) => {
    let description = document.querySelector('.description');
    let card = document.querySelector('.card');

    if(document.querySelector('title').innerText == 'Portfolio'){
      // console.log(name);
      if(name == 'Rivalry'){        
        Rivalry.loadMsg();   
        description.innerHTML = '';
        description.appendChild(ticDesc);
      }
    }    
  }
  this.turn = (id) => {
    let togg = document.querySelector(`#riv_${id} > p`);
    if (track.innerText === "O's TURN!"){
      togg.innerText = 'O';
      togg.style.color = 'red';
      track.innerText = "X's TURN!";
    }
    else {
      togg.innerText = 'X';
      togg.style.color = 'blue';
      track.innerText = "O's TURN!";
    }
    this.btns();
  }
  this.start = (el) => {
    game = el;
    this.box();  
  }
  this.btns = () => {
    // column
    let col1 = document.getElementById(`riv_${1}`).innerText+document.getElementById(`riv_${4}`)
    .innerText+document.getElementById(`riv_${7}`).innerText;
    let col2 = document.getElementById(`riv_${2}`).innerText+document.getElementById(`riv_${5}`)
    .innerText+document.getElementById(`riv_${8}`).innerText;
    let col3 = document.getElementById(`riv_${3}`).innerText+document.getElementById(`riv_${6}`)
    .innerText+document.getElementById(`riv_${9}`).innerText;

    // row
    let row1 = document.getElementById(`riv_${1}`).innerText+document.getElementById(`riv_${2}`)
    .innerText+document.getElementById(`riv_${3}`).innerText;
    let row2 = document.getElementById(`riv_${4}`).innerText+document.getElementById(`riv_${5}`)
    .innerText+document.getElementById(`riv_${6}`).innerText;
    let row3 = document.getElementById(`riv_${7}`).innerText+document.getElementById(`riv_${8}`)
    .innerText+document.getElementById(`riv_${9}`).innerText;

    // diagnal
    let diag1 = document.getElementById(`riv_${1}`).innerText+document.getElementById(`riv_${5}`)
    .innerText+document.getElementById(`riv_${9}`).innerText;
    let diag2 = document.getElementById(`riv_${3}`).innerText+document.getElementById(`riv_${5}`)
    .innerText+document.getElementById(`riv_${7}`).innerText;

    // OOO
    let scoreO = document.querySelectorAll('.scoreO > div');
    if (col1 === "OOO" || col2 === "OOO" || col3 === "OOO" || row1 === "OOO" || row2 === "OOO" || row3 === "OOO" || diag1 === "OOO" || diag2 === "OOO"){
      track.innerText = "O WON!";

      scoreO[0].innerText += "l";
      scoreO[1].innerText += "l";
      let mugen = document.querySelector('#mugen');
      mugen.style.display = 'block';
      inject.style.border = 'solid red 3px';
      // inject.style.opacity = 0;
      let count = 0;
      let incOp = setInterval(function(){ 
        if (count >= 1){
          clearInterval(incOp);
        } else {
          count += 0.02;
          mugen.style.opacity = count;
        }
      }, 50);
      track.style.color = 'red';          
    }

    // XXX
    let scoreX = document.querySelectorAll('.scoreX > div');
    if (col1 === "XXX" || col2 === "XXX" || col3 === "XXX" || row1 === "XXX" || row2 === "XXX" || row3 === "XXX" || diag1 === "XXX" || diag2 === "XXX"){
      track.innerText = "X WON!";

      scoreX[0].innerText += "l";
      scoreX[1].innerText += "l";           
      let jin = document.querySelector('#jin');
      jin.style.display = 'block';
      inject.style.border = "solid blue 3px";
      // inject.style.opacity = 0;
      let count = 0;
      let incOp = setInterval(function(){ 
        if (count >= 1){
          clearInterval(incOp);
        } else {
          count += 0.02;
          jin.style.opacity = count;
        }
      }, 50);
      track.style.color = 'blue';
    }
  }
}

window.Game = new Game();