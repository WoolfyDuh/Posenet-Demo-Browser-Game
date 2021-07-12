export function checkForRectCollision(rectXY,rectWH, circle){
    let dx = Math.abs(circle.position.dx - (rectXY.dx + rectWH.dx / 2));
    let dy = Math.abs(circle.position.dy - (rectXY.dy + rectXY.dy /2));

    if(dx > circle.radius + rectWH.dx / 2) return (false)
    if(dy > circle.radius + rectWH.dy / 2) return (false)

    if(dx <= rectWH.dx) return (true)
    if(dy <= rectWH.dy) return (true)
    
     dx = dx - rectWH.dx;
     dy = dy - rectWH.dy;
    
    return(dx * dx + dy * dy <= circle.radius * circle.radius);
  }