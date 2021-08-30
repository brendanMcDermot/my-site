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


//..........................Variables set..........................................
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
if(time > 300){
    time = 0
}
this.controller.timedEvents(time)
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
 function save(){
    controller.save()
 }

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

    controller.updateParticleColor(Rgb1, rGb1, rgB1, Rgb2, rGb2, rgB2, Rgb3, rGb3, rgB3, Rgb4, rGb4, rgB4, Rgb5, rGb5, rgB5)
}

function changeActorAmount(){
    newValue = document.getElementById('no_of_actors').value
    actorDisplay = document.getElementById('display_actor_number')
    actorDisplay.innerHTML = `No of particles: ${newValue}`
    controller.changeActorAmount(newValue)
}

function changeTheme(theme){
    console.log(theme)
    controller.setTheme(theme)
}

function changePreTheme(target){
    if(target == 'blue'){
        controller.updateParticleColor(0,0,50, 0,0,75, 0,0,120, 0,0,200, 120,120,240)
        controller.updateBackgroundColor(0,0,180, 0,0,0)
    }else if(target == 'rain'){
        controller.updateParticleColor(150,150,200, 150,150,175, 180,180,220, 190,190,250, 200,200,240)
        controller.updateBackgroundColor(120,100,180, 150,150,250)
    }else if(target == 'neon'){
        controller.updateParticleColor(250,0,50, 255,157,231, 253,200,215, 165,215,243, 250,250,250)
        controller.updateBackgroundColor(1,30,253, 182,107,253)
    }else if(target == 'darkWarmth'){
        controller.updateParticleColor(230,228,0, 0,0,75, 15,250,120, 10,20,200, 240,240,240)
        controller.updateBackgroundColor(0,200,180, 0,50,0)
    }
}

controller.init(innerWidth, innerHeight);
console.log(controller)
console.log('inner height = ' + innerHeight)
console.log('inner width = ' + innerWidth)
window.onload = animate();