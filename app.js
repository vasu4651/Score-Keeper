let p1=0;
let p2=0;
let isGameOver = false;



let winScore = 4;
let playto = document.querySelector('#playto');

playto.addEventListener('change' ,() => {
    winScore = parseInt(playto.value);
    reset();
});




let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');

let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let resetButton = document.querySelector('#resetButton');

let congrats = document.querySelector('#congrats');
let sec3 = document.querySelector('.sec3');
congrats.style.display = 'none';
let winnerDisplay = document.querySelector('#winner');
let winner = 0;

function reset(){
    isGameOver = false;
    p1=0;
    p2=0;
    p1Display.textContent = p1;
    p2Display.textContent = p2;
    congrats.style.display = 'none';
    sec3.style.display = 'block';
}

function over(){
    winnerDisplay.textContent = winner;
    sec3.style.display = 'none';
    congrats.style.display = 'block';
}

p1Button.addEventListener('click' , () => {
    if(p1 !== winScore && !isGameOver)
    {
        p1++;
        p1Display.textContent = p1;
    }
    if(p1 === winScore){
        isGameOver = true;
        winner = 1;
        over();
    }
});

p2Button.addEventListener('click' , () => {
    if(p2 !== winScore && !isGameOver)
    {
        p2++;
        p2Display.textContent = p2;
    }
    if(p2 === winScore){
        isGameOver = true;
        winner = 2;
        over();
    }
});

resetButton.addEventListener('click' , reset);


