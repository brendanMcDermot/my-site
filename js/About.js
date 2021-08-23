const fader = document.getElementById('fader')
let isLoaded = false
let aboutState = new AboutState()

function animate() {
    requestAnimationFrame(animate);
    console.log('animate running')
    if(isLoaded == false){
        fader.style.background = 'rgba(200, 200, 200, 1)'
        isLoaded = true
    }else{
        fader.style.background = `rgba(200, 200, 200, ${aboutState.faderValue})`
        if(aboutState.faderValue > 0){
            aboutState.faderValue -= 0.01
        }else{
            fader.style.zIndex  = "-2"
        }
    }
}

animate()