const fader = document.getElementById('fader')
const profilePic = document.getElementById('profile_pic')
let profFromLeft = -20
let isLoaded = false
let aboutState = new AboutState()

function animate() {
    requestAnimationFrame(animate);
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
    if(profFromLeft < 50){
        console.log(profilePic.style.x)
        profilePic.style.left = `${profFromLeft}px`
        profFromLeft = decelerate(profFromLeft)
    }
}

animate()