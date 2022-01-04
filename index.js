/// переменные ///

let start = document.getElementById('start');
let game = document.getElementById('game');
let time = document.getElementById('time');
let result = document.getElementById('result');
let timeH1 = document.getElementById('time-header');
let resultH1 = document.getElementById('result-header');
let inputTime = document.getElementById('game-time');
let score = 0;
let isGameActive = false;


/// события ///



inputTime.addEventListener('change', event => {
    time.innerText = String(inputTime.value);
})


function getRandom(min, max) {
    return (Math.floor(Math.random() * (max - min) + min)) 
}

function renderBox(){
    game.innerHTML = '';
    // getRandom(10, 290), getRandom(10, 290), getRandom(10, 50)
    let random = getRandom(30, 100);
    let maxDelta = 300 - random;
    let box = document.createElement('span');
    // box.style.content = '';
    box.style.width = random + 'px';
    box.style.height = random + 'px';
    box.style.position = 'absolute';
    box.style.top = getRandom(20, maxDelta) + 'px';
    box.style.left = getRandom(20, maxDelta) + 'px';
    box.style.backgroundColor = 'black';
    box.style.borderRadius = '100px'
    box.classList.add('box');
    game.appendChild(box);
}


function startGame(){
    isGameActive = true;
    start.style.visibility = 'hidden';
    game.style.backgroundColor = '#FFFFFF';
    inputTime.setAttribute('disabled', 'disabled');
    let interval = setInterval(function(){
        let gametime = Number(time.innerText);
        console.log(gametime);
        if(gametime <= 0){
            clearInterval(interval);
            endGame();
        } else {
            time.innerText = (gametime - 0.1).toFixed(1);
        }

    },100)
    renderBox();
}

function endGame() {
    isGameActive = false;
    game.innerHTML = '';
    start.style.visibility = 'visible';
    game.style.background = '#ccc';
    time.innerText = String(inputTime.value);
    inputTime.removeAttribute('disabled');
}


function gameBoxClick(event){
    if(!isGameActive){
        return;
    }
    // let box = document.querySelector('.box');
    if(event.target.classList.contains('box')){
        score = score + 1;
        // alert(score)
        renderBox();
    }

}

// events //

start.addEventListener('click', startGame);
game.addEventListener('click',gameBoxClick);
