class Controller{
    constructor(view, innerWidth, innerHeight, mouse){
        this.allMyActors = [];
        this.colorObj = new ColorObj();
        this.view = view;
        this.innerWidth = innerWidth;
        this.innerHeight = innerHeight;
        this.mouse = mouse;
    }

    init(noOfActors, innerWidth, innerHeight, actorSpeed){
        this.allMyActors = [];
        for (var i = 0; i < noOfActors; i++){
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * actorSpeed;
            var dy = (Math.random() - 0.5) * actorSpeed;
            var maxRadius = 40;
            var color = this.colorObj.blues[Math.floor(Math.random() * this.colorObj.blues.length)];
            
            this.allMyActors.push(new Actor(x, y, dx, dy, radius, maxRadius, color))
        }
    }

    updatedBackgroundColor(){
        var result = "linear-gradient(to left, rgba(0, 0, 50, 1), rgba(100, 50, 25, 1))";
        return result
    }

    animateLoop(){
        for (var i = 0; i < this.allMyActors.length; i++){
            this.allMyActors[i].update(innerWidth, innerHeight, mouse);
            view.draw(this.allMyActors[i], innerWidth, innerHeight);
        }
    }
}
