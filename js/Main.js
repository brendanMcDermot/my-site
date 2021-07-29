var canvas = document.querySelector('canvas');
var mouse = {
    x: undefined,
    y: undefined,
    radius: 50
}
var time = 0;
var c = canvas.getContext('2d');
var view = new View(c);
var controller = new Controller(view, window.innerWidth, window.innerHeight, mouse, canvas);

var fps = document.getElementById('index_fps')
let frameCount = 0;
let frameCounter = 0;

//size the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// event listeners
// find the cursor
window.addEventListener('mousemove', 
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
})

// resizing the window (responsive)
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    controller.init(innerWidth, innerHeight);
})

canvas.addEventListener('mousedown', e => {
    if(this.controller.state.transition == false){
        this.controller.state.transition = true
    }
  });
  

// counts the seconds
setInterval(function(){
time += 10
if(time > 350){
    time = 0
}
frameCount = frameCounter
frameCounter = 0
fps.innerHTML = `Frames Per Second: ${frameCount}`
// console.log(time)
}, 1000)

// animation loop
function animate() {
    requestAnimationFrame(animate);
    frameCounter += 1
    c.clearRect(0, 0, innerWidth, innerHeight);
    controller.animateLoop(time);
}



controller.init(innerWidth, innerHeight);
console.log(controller)
console.log('inner height = ' + innerHeight)
console.log('inner width = ' + innerWidth)
animate();


