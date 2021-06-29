import * as collision from "./rectangleCollision.js";
import * as square from "./drawSquare.js";
import * as webcam from "./camera.js";
import * as scoreCanvas from "./score.js";
import { playHitSound } from "./sounds.js";
let posenetOk = false;

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const video = document.getElementById('video');
const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

let pose;//debug global
export let score = 0;
export let missCount = 0;
export let countdownTime = 6;
let hasCollided = false;
const timeInMiliSeconds = 1000;

function setupContext(){
  cvs.width = screenWidth;
  cvs.height = screenHeight;
  ctx.globalAlpha = 1; // show video stream
  ctx.translate(screenWidth, 0);
  ctx.scale(-1, 1); // flip screen horizontal
}
async function start() {
  setupContext();
  //https://github.com/tensorflow/tfjs-models/tree/master/posenet
  const net = await posenet.load({
      architecture: 'MobileNetV1',
      outputStride: 16
      });

  let video;
  try {
      video = await webcam.loadVideo(screenWidth, screenHeight);
  } catch (e) {
      console.error(e);
      return;
  }
  ctx.fillStyle = "#6b03fc";
  detectPoseInRealTime(video, net);
}
function detectPoseInRealTime(video, net) {
    async function poseDetectionFrame() {
       pose = await net.estimateSinglePose(video);
      showSkeleton(pose);
      requestAnimationFrame(poseDetectionFrame);
    }
    poseDetectionFrame();
}

async function showSkeleton(poseArray){
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.drawImage(video, 0, 0, screenWidth, screenHeight);

      if(poseArray.keypoints[0].score>0.8)
        posenetOk = true; // start controlling
      else 
        posenetOk = false; // stop controlling
    
    updatePosition(poseArray.keypoints[0].position.x, poseArray.keypoints[0].position.y, nosePoint);
      nosePoint.draw(ctx);
    updatePosition(poseArray.keypoints[9].position.x, poseArray.keypoints[9].position.y, leftWristPoint);
      leftWristPoint.draw(ctx);
    updatePosition(poseArray.keypoints[10].position.x, poseArray.keypoints[10].position.y, rightWristPoint);
      rightWristPoint.draw(ctx);

    if(!hasCollided && posenetOk){
      square.drawSquare(ctx);
        if(collision.checkForRectCollision(square.getBeginPoint(),square.getWidthAndHeigh(), leftWristPoint)){
          score += 1;
          hasCollided = true;
          playHitSound();
          scoreCanvas.UpdateScore();
        } else if( collision.checkForRectCollision(square.getBeginPoint(), square.getWidthAndHeigh(), rightWristPoint)){
          score += 1;
          hasCollided = true;
          playHitSound();
          scoreCanvas.UpdateScore();
        }
    }
  }

  start();
setInterval(() => {
  scoreCanvas.UpdateScore()
  scoreCanvas.countdown()
  countdownTime -= 1;
  if(countdownTime == 0){
    countdownTime = 6;
    updateSquareAndMiss();
  }
  
}, timeInMiliSeconds);

function updatePosition(x, y, point){
  point.position.dx = x;
  point.position.dy = y;
}

function updateSquareAndMiss(){
  if(hasCollided && posenetOk ){
    hasCollided = false;
    square.setWalls(screenWidth, screenHeight)
  
  } else if(!hasCollided && posenetOk ){
    missCount += 1;
    scoreCanvas.UpdateScore()
    square.setWalls(screenWidth, screenHeight)
  }
}

  let nosePoint = new Points(new Vector2d(0 ,0), 5, "white");
  let leftWristPoint = new Points(new Vector2d(0, 0), 30, "#fcc00d");
  let rightWristPoint = new Points(new Vector2d(0, 0), 30, "#0048ff");