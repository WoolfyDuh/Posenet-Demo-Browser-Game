import * as posenet from "./posenet.js";

const cvs = document.getElementById("scoreCanvas");
const ctx = cvs.getContext("2d");

const width =  window.innerWidth;
const height = window.innerHeight;
cvs.width = width;
cvs.height = height;

let countdownTime = 6;

export function UpdateScore(){
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#FFAFBD";
    ctx.font = "25px Verdana"
    ctx.fillRect((width / 2) - 150, 0, 300, 50);
    ctx.fillStyle = "maroon";
    ctx.fillText("Score: " + posenet.score + " Misses: " + posenet.missCount, (width / 2) - 110, 35);
}
function countdown() {
ctx.clearRect(0, 0, width, height);
ctx.fillStyle = "#FFC3A0";
ctx.fillRect(0,0, 100, 50);
ctx.font = "20px Verdana";
ctx.fillStyle = "maroon";
ctx.fillText("Countdown: " + countdownTime, 0, 30);
}

setInterval(() => {
if(countdownTime === 0){
    countdownTime = 6;
    break;
}
else if(countdownTime > 0){
    countdownTime - 1;
    countdown();
}
}, 1000);
