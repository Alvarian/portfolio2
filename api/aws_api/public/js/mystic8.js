function Mystic8() {
  let divID = [0,7,2,3,4,5,6,1,8];
  let divPOS = [88,81,82,18,11,12,28,21,22];
  let fame, altzBoard, altzDesc, description;
  
  this.getName = (e,ind) => {
    console.log('Altz');

    let openers = document.querySelectorAll(".card");
    let el = e.currentTarget;
    for(let opn of openers){
      // console.log(el);
      if(el === opn) {
        modal = document.querySelector(`.modal_${el.id}`);

        // INPUT fAME CONTAINER vvv
        document.querySelector(`.game_${ind}`).appendChild(fame);
        // INPUT fAME CONTAINER ^^^

        document.querySelector(`.modal_${el.id}`).style.display = "block";
      }
    }
  }
  this.loopy = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
      func(i);
    }
  }
  this.loadMsg = () => {
    let desc = [`Risk your memory!`,`Those who have disarmed this bomb (with their memory intact) describe the process as a catchy song, but dont let
            that fool you. That "song" is the noise that it generates as it charges. You have until the end of the noise until it goes off and scrambles
            your memory! To disarm the bomb, order the values from least to greatest, left to right, up to down, leaving the dud as the last place.`];
    let warning = ['WARNING:','Be sure to have your routine recorded before attempting this explosive.'];
    altzDesc = document.createElement('div');
    altzDesc.setAttribute('class','altzDesc');
    this.loopy(desc, (i) => {
      if(desc[i] == desc[0]){
        let head = document.createElement('h2');
        head.innerText = `${desc[i]}`;
        altzDesc.appendChild(head);
      } else {
        let parts = document.createElement('p');
        parts.innerText = `${desc[i]}`;
        altzDesc.appendChild(parts);      
      }
    });
    this.loopy(warning, (i) => {
      if(warning[i] == warning[0]){
        let head = document.createElement('h2');
        head.innerText = `${warning[i]}`;
        altzDesc.appendChild(head);
      } else {
        let parts = document.createElement('p');
        parts.innerText = `${warning[i]}`;
        altzDesc.appendChild(parts);
      }
    });
  }
  this.box = () => {
    console.log('box1');
    document.querySelector('head').innerHTML += `<link href="https://fonts.googleapis.com/css?family=Orbitron|VT323&amp;subset=latin-ext,vietnamese" rel="stylesheet">`;

    let aspect = document.createElement('div');
    aspect.setAttribute('class','aspect');

    let box = document.createElement('div');
    box.setAttribute('class','box');
    box.appendChild(aspect);

    let container = document.createElement('div');
    container.setAttribute('class','article arounded container');
    let title = document.createElement('h1');
    title.setAttribute('class','riv');
    title.innerText = 'ALTZ-082B';

    container.appendChild(title);
    container.appendChild(box); 

    let timer = document.createElement('div');
    timer.setAttribute('class','timer');
    timer.innerText = '00:00';

    container.appendChild(timer); 

    let altzBoard = document.createElement('div');
    altzBoard.setAttribute('class','altzBoard');

    this.loopy(divID, (i) => {
      let altzBoxes = document.createElement('div');
      altzBoxes.setAttribute('id', `${divID[i]}`);
      altzBoxes.setAttribute('class', `altzBoxes ${i}`);

      let clear = document.createElement('p');
      clear.setAttribute('class','clear');
      let tabs = document.createTextNode(`${divID[i]}`);
      clear.appendChild(tabs);
      altzBoxes.appendChild(clear);

      altzBoxes.addEventListener('click', () => {
        this.shift(divPOS[i], divID[i], i);
      });

      altzBoard.appendChild(altzBoxes);
    })

    box.appendChild(altzBoard);

    // let withTitle = document.createElement('div');
    // withTitle.setAttribute('class','withTitle');
    // withTitle.appendChild(title);
    // withTitle.appendChild(container);

    fame.appendChild(container);
  }
  this.showDesc = (name) => {
    let card = document.querySelector('.card');
    if(document.querySelector('title').innerText == 'Portfolio'){
      // console.log(name);
      if(name == 'Mystic8'){ 
        console.log('reading...');         
        Mystic8.loadMsg();  
        console.log('read'); 
        description.innerHTML = '';
        description.appendChild(altzDesc);
      }
    }
  }
  this.start = (el) => {
    // if(document.querySelector('title').innerText == 'Portfolio'){
    //   fame = document.createElement('div');
    //   fame.setAttribute('class','altz');

    //   description = document.querySelector('.description');

    //   this.box();
    //   console.log('portfolio');
    // } else {
    //   fame = document.querySelector('.altz');

    //   description = document.createElement('div');
    //   description.setAttribute('class','description');
    //   this.loadMsg();
    //   description.innerHTML = '';
    //   description.appendChild(altzDesc);

    //   this.box();
    //   console.log('app');
    // }
    fame = el;
    this.box();
  }
  let width = 3;
  let only = true;
  this.shift = (pos, id, i) => {
    console.log('shift', pos, id, i);
    let el = document.getElementById(id);

    // if (only==true){
    //   // document.getElementById("mansion").play();
    //   let iframe = document.createElement('iframe');
    //   iframe.setAttribute('src', 'https://www.youtube.com/embed/qFtCQNfbEss?autoplay=1');
    //   iframe.setAttribute('width', '0');
    //   iframe.setAttribute('height', '0');
    //   fame.appendChild(iframe);

    //   let timed = setInterval(function(){

    //       // scramble divID

    //       // alert(divID);

    //       // flash
    //       let stack = 0;
    //       let flash = setInterval(function(){
    //           var all = document.querySelector('*');
    //           stack++;
    //           // alert(only);
    //           if (stack=='7'){
    //             clearInterval(flash);

    //             function shuffle(a) {
    //               for (v=divID.length; v; v--){
    //                 let j = Math.floor(Math.random() * v);

    //                 [divID[v - 1], divID[j]] = [divID[j], divID[v - 1]];

    //               }
    //               return a;
    //             }


    //             // function shuffle(a) {
    //             //     for (let v = a.length; v; v--) {
    //             //         let j = Math.floor(Math.random() * v);
    //             //         [a[v - 1], a[j]] = [a[j], a[v - 1]];

    //             //         // [a[v - 1], a[j]] = [a[j], a[v - 1]];
    //             //     }
    //             // }

    //             shuffle(divID);
    //             divID = shuffle(divID);
    //             // altzBoard.innerHTML = `<div onclick="shift( false )"></div>`;
    //             // load();
    //             // alert(divID);

    //             // break;
                
    //             // alert(only)
    //           }

    //           // TOGGLE SYSTEM FROM STACKOVERFLOW
    //           if(all.style.color=='black'){
    //             all.style.color = 'white';
    //             all.style.background = 'black';
    //           }
    //           else{
    //             all.style.color = 'black';
    //             all.style.background = 'white';
    //           }

    //       },100);

    //       // alert("guuuh");
    //       document.querySelector('.change').innerText =
    //       "000110011100101101010101011101011010000011101010101011100000110011100101101010101011100001100111001011010101010111001110010110101010101110101101000001100111001011010101010111010110100000110011100101101010101011101011010010101010101110101101000001100111001011010101010111010110100000110011100101101010101011101011010010101010101110101101000001100111001011010101010111010110100000110011100101101010101011101011"
    //       document.querySelector('.again').innerText = "101100101010101011101011100101010111010111001010110010111010111001010101010101110101110010"

    //       clearInterval(timed);
    //     }, 85000);
    // }
    only=false;


    // console.log(i+1)
    let left = divID[i-1];
    let up =  divID[i-width];
    let right = divID[i+1];
    let down = divID[i+width];

    // alert("index right is "+right);

    let guh = document.getElementById(left);
    let duh = document.getElementById(right);
    let fuh = document.getElementById(down);
    let uh = document.getElementById(up);

    // alert("duh is "+duh.innerHTML);

    // row1


    // AURY AND WALDO HELPED WITH THE CHECKING SYSTEM
    let zero = document.getElementById(divID[0]);
    if (pos == divPOS[0]){
        // alert('right, down. pos is'+pos+" index is "+i);
        // // alert("width is "+width);

        // alert("right is "+duh.innerHTML);


        // alert("down is "+fuh.innerHTML);


        if (duh.innerText==`0`){
          // alert("RIGHT");

          this.moveRight(pos, el, i, right, duh);
        }
        else if (fuh.innerText==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }
    else if (pos == divPOS[1]){
        // alert('left, right, down. pos is '+pos+" index is "+i);
        // alert(width);

        // alert("left is "+guh.innerText);

        // alert("right is "+duh.innerText);

        // alert("down is "+fuh.innerText);

        if (guh.innerText==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (duh.innerText==`0`){
          // alert("RIGHT");
          this.moveRight(pos, el, i, right, duh);
        }
        else if (fuh.innerText==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }
    else if (pos == divPOS[2]){
        // alert('left, down. pos is '+pos+" index is "+i);
        // alert(width);

        // alert("left is "+guh.innerText);

        // alert("down is "+fuh.innerText);

        if (guh.innerText==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (fuh.innerText==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }

    // row2
    else if (pos == divPOS[3]){
        // alert('up, down, right. pos is '+pos);
        // alert(width);

        // alert("up is "+uh.innerText);

        // alert("right is "+duh.innerHTML);

        // alert("down is "+fuh.innerHTML);

        if (duh.innerHTML==`0`){
          // alert("RIGHT");
          this.moveRight(pos, el, i, right, duh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }

        else if (fuh.innerHTML==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }
    else if (pos == divPOS[4] ){
        // alert(width);
        // alert('left, right, down, up. pos is '+pos);

        // alert("left is "+guh.innerHTML);

        // alert("up is "+uh.innerHTML);

        // alert("right is "+duh.innerHTML);

        // alert("down is "+fuh.innerHTML);

        if (guh.innerHTML==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (duh.innerHTML==`0`){
          // alert("RIGHT");
          this.moveRight(pos, el, i, right, duh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }

        else if (fuh.innerHTML==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }
    else if (pos == divPOS[5]){
        // alert('left, up, down. pos '+pos);
        // alert(width);

        // alert("left is "+guh.innerHTML);

        // alert("up is "+uh.innerHTML);

        // alert("down is "+fuh.innerHTML);

        if (guh.innerHTML==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }

        else if (fuh.innerHTML==`0`){
          // alert("DOWN");
          this.moveDown(pos, el, i, down, fuh);
        }
    }

    // row3
    else if (pos == divPOS[6]){
        // alert('right, up. pos is '+pos);
        // alert(width);

        // alert("up is "+uh.innerHTML);

        // alert("right is "+duh.innerHTML);

         if (duh.innerHTML==`0`){
          // alert("RIGHT");
          this.moveRight(pos, el, i, right, duh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }
    }
    else if (pos == divPOS[7] ){
        // alert('left, right, up. pos is '+pos);
        // alert(width);


        // alert("left is "+guh.innerHTML);

        // alert("up is "+uh.innerHTML);

        // alert("right is "+duh.innerHTML);

        if (guh.innerHTML==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (duh.innerHTML==`0`){
          // alert("RIGHT");
          this.moveRight(pos, el, i, right, duh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }
    }
    else if (pos == divPOS[8]){
        // alert('left, up. pos is '+pos);
        // alert(width);

        // alert("left is "+guh.innerHTML);

        // alert("up is "+uh.innerHTML);

        if (guh.innerHTML==`0`){
          // alert("LEFT");
          this.moveLeft(pos, el, i, left, guh);
        }
        else if (uh.innerHTML==`0`){
          // alert("UP");
          this.moveUp(pos, el, i, up, uh);
        }
      }
        // alert(document.getElementById('1'));

    // alert(divID);
    if (divID =="1,2,3,4,5,6,7,8,0"){
      // alert("BANG");
      document.getElementById("mansion").pause();
      let riv = document.querySelector('.riv');
      riv.innerHTML = "AGAIN?";
      riv.className = "adjust";
      riv.addEventListener('click', () => window.location.reload());
      // fame.innerHTML = '<img class="good" src="squidward.gif">';
    }
  }
  this.moveLeft = (pos, el, i, l, g) => {
    el.innerText = l;
    el.id = l;
    el.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i] }, ${ l }, ${i} )`)
    g.innerText = divID[i];
    g.id = divID[i];
    g.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i-1] }, ${ divID[i] }, ${i-1} )`);

    // alert(divID);
    // ARRAY MUTATION SYSTEM FROM STACKOVERFLOW
    let plswrk = divID[i];
    divID[i] = divID[i-1];
    divID[i-1] = plswrk;
    // alert(divID);
  }

  this.moveRight = (pos, el, i, r, d) => {
    el.innerText = r;
    el.id = r;
    el.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i] }, ${ r }, ${i} )`)
    d.innerText = divID[i];
    d.id = divID[i];
    d.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i+1] }, ${ divID[i] }, ${i+1} )`);

    // alert(divID);
    // ARRAY MUTATION SYSTEM FROM STACKOVERFLOW
    let plswrk = divID[i];
    divID[i] = divID[i+1];
    divID[i+1] = plswrk;
    // alert(divID);
  }

  this.moveUp = (pos, el, i, u, uh) => {
    el.innerText = u;
    el.id = u;
    el.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i] }, ${ u }, ${i} )`)
    uh.innerText = divID[i];
    uh.id = divID[i];
    uh.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i-width] }, ${ divID[i] }, ${i-width} )`);

    // alert(divID);
    // ARRAY MUTATION SYSTEM FROM STACKOVERFLOW
    let plswrk = divID[i];
    divID[i] = divID[i-width];
    divID[i-width] = plswrk;
    // alert(divID);
  }

  this.moveDown = (pos, el, i, d, f) => {
    el.innerText = d;
    el.id = d;
    el.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i] }, ${ d }, ${i} )`)
    f.innerText = divID[i];
    f.id = divID[i];
    f.setAttribute('onclick',`Mystic8.shift( ${ divPOS[i+width] }, ${ divID[i] }, ${i+width} )`);

    // alert(divID);
    // ARRAY MUTATION SYSTEM FROM STACKOVERFLOW
    let plswrk = divID[i];
    divID[i] = divID[i+width];
    divID[i+width] = plswrk;
    // alert(divID);
  }
}

const gameFile = new Mystic8();

