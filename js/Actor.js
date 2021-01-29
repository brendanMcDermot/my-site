class Actor{
    constructor(x, y, dx, dy, radius, maxRadius, color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.maxRadius= maxRadius;
        this.color = color;
    }

    update(innerWidth, innerHeight, mouse){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < maxRadius){
                this.radius += 1;
            }
        }else if (this.radius > this.minRadius){
            this.radius -= 1;
        }
    } 
}