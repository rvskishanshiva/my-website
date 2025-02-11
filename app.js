let gameSeq=[];
let userSeq=[];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started== false){
        started = true;
        
        levelUp();
    }
});

function  gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 100);
} 

function  userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 100);
} 

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`); 
    gameSeq.push(randomColor);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = ` Game Over! Your score was <b>${level}</b><br> Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
        reset();
    }   
}

function btnPress(){
    let btn = this;
    userflash(btn);
     
    userColor =btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
} 

function reset(){
    gameSeq=[];
    userSeq=[];
    started = false;
    h2.innerHTML = ` Game Over! Your score was <b>${level}</b><br> Press any key to restart.`;
    level = 0;
}