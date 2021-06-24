 import { playWallSpawnSound } from "./sounds.js";

  let beginPoint = new Vector2d(0,0);
  let widthAndHeight = new Vector2d(500,500);

export function setWalls(screenWidth, screenHeight){
    resetPoints();
    playWallSpawnSound();
    let number = Math.floor(Math.random()* 4);
    switch(number){
      case 0:
        console.log("%c scaramouche", "color:white;");
       widthAndHeight.equals(new Vector2d(screenWidth, 200))
      break
      case 1:
        console.log("%c will you do", "color:aqua;");
       widthAndHeight.equals(new Vector2d(300, screenHeight))
      break
      case 2:
        console.log("%c the fandango", "color: orange;");
        beginPoint.equals(new Vector2d(0, screenHeight- 100));
        widthAndHeight.equals(new Vector2d(screenWidth, screenHeight));
      break
      case 3:
        console.log("%c THUNDERBOLT AND LIGHNING VERY VERY FRIGHTNING", "color: red; font-weight:30px; ")
        beginPoint.equals(new Vector2d((screenWidth - 300),0))
        widthAndHeight.equals(new Vector2d(screenWidth,screenHeight))
      break
      case 4:
      console.log("OH MAAMAAAAAA")
      break
    }
  }
 export function drawSquare(ctx){
    ctx.fillStyle = "rebeccapurple"
    ctx.beginPath()
    ctx.fillRect(beginPoint.dx, beginPoint.dy, widthAndHeight.dx, widthAndHeight.dy);
    ctx.stroke()
    // for debug purposes
    // let beginPoints1 = new Points(beginPoint, 10, "white");
    // let endPoints2 = new Points(widthAndHeight, 10, "white");
    // beginPoints1.draw(ctx);
    // endPoints2.draw(ctx);
  }

export function getBeginPoint(){
    return beginPoint;
}

export function getWidthAndHeigh(){
    return widthAndHeight;
}

  function resetPoints(){
    beginPoint.equals(new Vector2d(0,0));
    widthAndHeight.equals(new Vector2d(0,0));
  }
  
