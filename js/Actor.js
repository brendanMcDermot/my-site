class Actor{
    constructor(x, y, dx, dy, radius, maxRadius, colorR, colorG, colorB, colorA, colorIndex){
        this.vector2D = {x: x, y: y}
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.maxRadius= maxRadius;
        this.fallspeed = Math.random() * 2

        this.colorR = colorR
        this.colorG = colorG
        this.colorB = colorB
        this.colorA = colorA
        this.colorIndex = colorIndex
        this.colorOpacity = 1
        this.outlineR = 50
        this.outlineG = 50
        this.outlineB = 150
        this.outlineA = 1

    }

    updateBlue(innerWidth, innerHeight, mouse, influence){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx * influence;
        this.y += this.dy * influence;
    }

    updateInteractiveSwell(mouse){
        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius){
                this.radius += 1;
            }
        }else if (this.radius > this.minRadius){
            this.radius -= 1;
        }
    }

    updateRain(innerWidth, innerheight, mouse, influence, cursorAreaOfEffect){
        if (this.y > innerheight){
            this.y = 0
        } else{
            this.y += (this.fallspeed + 3) * influence
        }
    }

    updateEcho(innerWidth, innerHeight, mouse, influence){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx * influence;
        this.y += this.dy * influence;
    }

    updateInteractiveEchoSwell(mouse){ // fix this !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if (this.radius < this.maxRadius){
                this.radius += 1;
                if (this.outlineA < 1){
                    this.outlineA += 0.2
                }
            }
        }else{
            if (this.radius > this.minRadius){
                this.radius -= 1;
            }
            if (this.outlineA > 0.3 ){
                this.outlineA -= 0.1
            }
        }

    }
    colorToString(){
        return `rgba(${this.colorR}, ${this.colorG}, ${this.colorB}, ${this.colorA})`
    }
    outlineToString(){
        return `rgba(${this.outlineR}, ${this.outlineG}, ${this.outlineB}, ${this.outlineA})`
    }
}