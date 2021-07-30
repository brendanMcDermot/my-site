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

// variables for calculating fps
var fps = document.getElementById('index_fps')
let frameCount = 0;
let frameCounter = 0;

// size the canvas
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

function sampleBackgroundColor(){
    console.log('background color called')
    Rgb1 = document.getElementById('Rgb1').value
    rGb1 = document.getElementById('rGb1').value
    rgB1 = document.getElementById('rgB1').value
    sample1 = document.getElementById('color_background_one')
    sample1.style.backgroundColor = `rgb(${Rgb1}, ${rGb1}, ${rgB1})`
    Rgb2 = document.getElementById('Rgb2').value
    rGb2 = document.getElementById('rGb2').value
    rgB2 = document.getElementById('rgB2').value
    sample2 = document.getElementById('color_background_two')
    sample2.style.backgroundColor = `rgb(${Rgb2}, ${rGb2}, ${rgB2})`

    controller.updateBackgroundColor(Rgb1, rGb1, rgB1, Rgb2, rGb2, rgB2)
}

function sampleParticleColor(){
    console.log('particle controller called')
    Rgb1 = document.getElementById('pRgb1').value
    rGb1 = document.getElementById('prGb1').value
    rgB1 = document.getElementById('prgB1').value
    sample1 = document.getElementById('color_particle_one')
    sample1.style.backgroundColor = `rgb(${Rgb1}, ${rGb1}, ${rgB1})`
    Rgb2 = document.getElementById('pRgb2').value
    rGb2 = document.getElementById('prGb2').value
    rgB2 = document.getElementById('prgB2').value
    sample2 = document.getElementById('color_particle_two')
    sample2.style.backgroundColor = `rgb(${Rgb2}, ${rGb2}, ${rgB2})`
    Rgb3 = document.getElementById('pRgb3').value
    rGb3 = document.getElementById('prGb3').value
    rgB3 = document.getElementById('prgB3').value
    sample3 = document.getElementById('color_particle_three')
    sample3.style.backgroundColor = `rgb(${Rgb3}, ${rGb3}, ${rgB3})`
    Rgb4 = document.getElementById('pRgb4').value
    rGb4 = document.getElementById('prGb4').value
    rgB4 = document.getElementById('prgB4').value
    sample4 = document.getElementById('color_particle_four')
    sample4.style.backgroundColor = `rgb(${Rgb4}, ${rGb4}, ${rgB4})`
    Rgb5 = document.getElementById('pRgb5').value
    rGb5 = document.getElementById('prGb5').value
    rgB5 = document.getElementById('prgB5').value
    sample5 = document.getElementById('color_outline')
    sample5.style.backgroundColor = `rgb(${Rgb5}, ${rGb5}, ${rgB5})`

    controller.updateParticleColor(Rgb1, rGb1, rgB1, Rgb2, rGb2, rgB2, Rgb3, rGb3, rgB3, Rgb4, rGb4, rgB4)
}

function changeActorAmount(){
    newValue = document.getElementById('no_of_actors').value
    actorDisplay = document.getElementById('display_actor_number')
    actorDisplay.innerHTML = `${newValue}`
    controller.changeActorAmount(newValue)
}
