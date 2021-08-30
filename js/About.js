const fader = document.getElementById('fader')
const profilePic = document.getElementById('profile_pic')
let posFromLeft = -250
let isLoaded = false
let isAnimate = true
let aboutState = new AboutState()



function animate() {
    if(isAnimate){
        requestAnimationFrame(animate);
        if(isLoaded == false){
            fader.style.background = 'rgba(200, 200, 200, 1)'
            isLoaded = true
        }else{
            fader.style.background = `rgba(200, 200, 200, ${aboutState.faderValue})`
            if(aboutState.faderValue > 0){
                aboutState.faderValue -= 0.01
            }else{
                fader.style.zIndex  = "-1"
            }
        }
        if(posFromLeft < 50){
            console.log(profilePic.style.x)
            profilePic.style.left = `${posFromLeft}px`
            posFromLeft = decelerate(posFromLeft)
        }        
    }

}
window.onload = animate()

