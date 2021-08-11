class View{
    constructor(c){
        this.c = c;
    }

    draw(actor, color, outlineColor){
        c.beginPath();
        c.arc(actor.vector2D.x, actor.vector2D.y, actor.radius, 0, Math.PI * 2, false);
        c.strokeStyle = `rgb(${outlineColor.r}, ${outlineColor.g}, ${outlineColor.b})`;
        c.stroke();
        c.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${actor.colorOpacity})`;
        c.fill();
    }
}