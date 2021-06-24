class Points {
    constructor(position, radius, color) {
        this.position = position;
        this.radius = radius;
        this.color = color || "honeydew";
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "hotpink";
        ctx.fillStyle = this.color;
        ctx.arc(this.position.dx, this.position.dy, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}