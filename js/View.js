class View{
    constructor(c){
        this.c = c;
    }

    draw(actor){
        c.beginPath();
        c.arc(actor.x, actor.y, actor.radius, 0, Math.PI * 2, false);
        c.strokeStyle = actor.outlineToString();
        c.stroke();
        c.fillStyle = actor.colorToString();
        c.fill();
    }
}