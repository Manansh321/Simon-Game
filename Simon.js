let gameSeq=[];
let userSeq=[];
let btns = [ "red", "green", "yellow", "purple" ]; 
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        
        levelUp(); 
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}



function levelUp() { 
    userSeq = [];
    level++;
    h2.innerText = "Level :" + level;

    // choising random number 

    let randInd = Math.floor(Math.random() * 4)  ; 
    console.log(randInd);
    
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

    console.log(randInd);
    gameflash(randBtn);
}

function checkAns(idx) { 
    // console.log("current level :" + level); 
 
    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = (`Game over! your score was <b>${level}</b> <br> press any key to start again !`);
        document.querySelector("body").style.backgroundColor = "red"; 
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnPress () {
    let btn = this;
    // console.log(btn);    
    userflash(btn);

     userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns) { 
    btn.addEventListener("click", btnPress);
}
function reset () {
    started = false;
    gameSeq = [];
    userSeq = []; 
    level = 0;
} 
 
