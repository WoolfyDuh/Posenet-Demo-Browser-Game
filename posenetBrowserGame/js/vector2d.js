class Vector2d {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    get magnitude() {
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    }

    set magnitude(newMag){
        let tempAngle = this.angle;
        this.dx = newMag*Math.cos(tempAngle);
        this.dy = newMag*Math.sin(tempAngle);
    }
    get angle(){
        return Math.atan2(this.dy,this.dx);
    }

    differenceVector(a, b) {
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
    }
    sumVector(a,b){
        this.dx = a.dx + b.dx;
        this.dy = a.dy + b.dy;
    }

    add(vector){
        this.dx += vector.dx;
        this.dy += vector.dy;
    }

    //boop
    scalMul(scal){
        this.dx *= scal;
        this.dy *= scal;
    }
    dot(vector){
       return this.dx * vector.dx + this.dy * vector.dy;
    }
    equals(vector){
        this.dx = vector.dx;
        this.dy = vector.dy;
    }
    normalized() {
        let tempAngle = this.angle;
        this.dx = 1 * Math.cos(tempAngle);
        this.dy = 1 * Math.sin(tempAngle);
    }
    flipMagnitude(){
        this.magnitude = -this.magnitude;   
    }
    perpendicular(vector){
        this.dx = -vector.dy;
        this.dy = vector.dx;
    }

    // draw(ctx, pos, color, scale) {
    //     let shaftHeight = 10;
       
    //     let arrowHeight = 20;
    //     let arrowWidth = 20;
    //     let shaftWidth = this.magnitude * scale - arrowWidth;

    //     ctx.fillStyle = color || "black";

    //     ctx.save();
    //     ctx.translate(pos.dx, pos.dy);
    //     ctx.rotate(this.angle)

    //     ctx.beginPath();
    //     ctx.moveTo(0, 0);
    //     ctx.lineTo(0, shaftHeight / 2);
    //     ctx.lineTo(shaftWidth, shaftHeight / 2);
    //     ctx.lineTo(shaftWidth, arrowHeight / 2);
    //     ctx.lineTo(shaftWidth + arrowWidth, 0);
    //     ctx.lineTo(shaftWidth, -arrowHeight / 2);
    //     ctx.lineTo(shaftWidth, -shaftHeight / 2);
    //     ctx.lineTo(0, -shaftHeight / 2);
    //     ctx.closePath();
    //     ctx.stroke();
    //     ctx.fill();

    //     ctx.restore();
    // }
}