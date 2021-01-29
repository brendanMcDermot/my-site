class View{
    constructor(c){
        this.c = c;
    }

    draw(actor){
        c.beginPath();
        c.arc(actor.x, actor.y, actor.radius, 0, Math.PI * 2, false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fillStyle = actor.color;
        c.fill();
    }
}