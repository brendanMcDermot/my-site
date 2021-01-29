var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');
var view = new View(c);
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var numberOfActors = 800;
var actorSpeed = 2;
var controller = new Controller(view, innerWidth, innerHeight, mouse);

//size the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

// event listeners
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
})

// resizing the window (responsive)
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;

    controller.init(numberOfActors, innerWidth, innerHeight, actorSpeed);
})

// animation loop
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    controller.animateLoop();
}

controller.init(numberOfActors, innerWidth, innerHeight, actorSpeed);
animate();


