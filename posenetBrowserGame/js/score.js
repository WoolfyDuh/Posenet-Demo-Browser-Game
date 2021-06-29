import * as posenet from "./posenet.js";

const cvs = document.getElementById("scoreCanvas");
const ctx = cvs.getContext("2d");

const width =  window.innerWidth;
const height = window.innerHeight;
cvs.width = width;
cvs.height = height;


export function UpdateScore(){
    ctx.fillStyle = "#FFAFBD";
    ctx.font = "25px Verdana"
    ctx.fillRect((width / 2) - 160, 0, 320, 50);
    ctx.fillStyle = "maroon";
    ctx.fillText("Score: " + posenet.score + " Misses: " + posenet.missCount, (width / 2) - 110, 35);
}
export function countdown() {
ctx.clearRect(0, 0, width, height);
UpdateScore();
ctx.fillStyle = "#FFC3A0";
ctx.fillRect(0,0, 155, 50);
ctx.font = "20px Verdana";
ctx.fillStyle = "maroon";
ctx.fillText("Countdown: " + (posenet.countdownTime - 1).toString() , 5, 30);
}
