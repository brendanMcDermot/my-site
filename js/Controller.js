class Controller{
    constructor(view, innerWidth, innerHeight, mouse, canvas){
        this.view = view;
        this.innerWidth = innerWidth;
        this.innerHeight = innerHeight;
        this.mouse = mouse;
        this.canvas = canvas

        this.theme = 'particles'
        this.eventTime = 0
        this.influence = 1

        this.backgroundL = {r: 0, g: 0, b: 0, a: 1}
        this.targetBackgroundL = {r: 0, g: 0, b: 0, a: 1}
        this.backgroundR = {r: 0, g: 0, b: 50, a: 1}
        this.targetBackgroundR = {r: 0, g: 0, b: 50, a: 1}
        this.pColor1 = {r: 0, g: 0, b: 25, a: 1}
        this.pColor2 = {r: 0, g: 0, b: 50, a: 1}
        this.pColor3 = {r: 0, g:0, b: 75, a: 1}
        this.pColor4 = {r: 0, g: 0, b: 100, a: 1}
        this.outlineColor = {r: 0, g: 0, b: 0}

        this.allMyColorOneActors = [];
        this.allMyColorTwoActors = [];
        this.allMyColorThreeActors = [];
        this.allMyColorFourActors = [];
        this.maxRadius = 40;
        this.minRadius = 5
        this.noOfActors = 800;
        this.actorSpeed = 2;
        this.cursorAreaOfEffect = 35
    }

    setTheme(newTheme){
        this.theme = newTheme
    }

    timedEvents(time){
        this.eventTime = time
    }

    // Initialise Load and save methods
    save(){
            console.log("save ran in controller")
            let customValues = {
                backgroundL: this.targetBackgroundL,
                backgroundR: this.targetBackgroundR,
                noOfActors: this.noOfActors,
                pColor1: this.pColor1,
                pColor2: this.pColor2,
                pColor3: this.pColor3,
                pColor4: this.pColor4,
                outline: this.outlineColor
            }
            localStorage.setItem('customValues', JSON.stringify(customValues))
    }

    load(){
            let defaults = localStorage.getItem('customValues')
            let cValues = JSON.parse(defaults)
            console.log(cValues)
            this.backgroundL.r = parseInt(cValues.backgroundL.r)
            this.backgroundL.g = parseInt(cValues.backgroundL.g)
            this.backgroundL.b = parseInt(cValues.backgroundL.b)
            this.backgroundR.r = parseInt(cValues.backgroundR.r)
            this.backgroundR.g = parseInt(cValues.backgroundR.g)
            this.backgroundR.b = parseInt(cValues.backgroundR.b)

            this.targetBackgroundL.r = this.backgroundL.r
            this.targetBackgroundL.g = this.backgroundL.g
            this.targetBackgroundL.b = this.backgroundL.b
            this.targetBackgroundR.r = this.backgroundR.r
            this.targetBackgroundR.g = this.backgroundR.g
            this.targetBackgroundR.b = this.backgroundR.b
            this.canvas.style.background = `linear-gradient(to left, rgb(${this.backgroundL.r}, ${this.backgroundL.g}, ${this.backgroundL.b}), rgb(${this.backgroundR.r}, ${this.backgroundR.g}, ${this.backgroundR.b}))`


            // console.log("cValue")
            // console.log(cValues)
            this.noOfActors = cValues.noOfActors
            this.pColor1.r = parseInt(cValues.pColor1.r)
            this.pColor1.g = parseInt(cValues.pColor1.g)
            this.pColor1.b = parseInt(cValues.pColor1.b)

            this.pColor2.r = parseInt(cValues.pColor2.r)
            this.pColor2.g = parseInt(cValues.pColor2.g)
            this.pColor2.b = parseInt(cValues.pColor2.b)

            this.pColor3.r = parseInt(cValues.pColor3.r)
            this.pColor3.g = parseInt(cValues.pColor3.g)
            this.pColor3.b = parseInt(cValues.pColor3.b)

            this.pColor4.r = parseInt(cValues.pColor4.r)
            this.pColor4.g = parseInt(cValues.pColor4.g)
            this.pColor4.b = parseInt(cValues.pColor4.b)

            this.outlineColor.r = parseInt(cValues.outline.r)
            this.outlineColor.g = parseInt(cValues.outline.g)
            this.outlineColor.b = parseInt(cValues.outline.b)

            this.setControllerValues()
    }

    setControllerValues(){
            //background sliders
            let backColorDiv1R = document.getElementById('Rgb1')
            let backColorDiv1G = document.getElementById('rGb1')
            let backColorDiv1B = document.getElementById('rgB1')
            let backColorDiv2R = document.getElementById('Rgb2')
            let backColorDiv2G = document.getElementById('rGb2')
            let backColorDiv2B = document.getElementById('rgB2')
            // particles & outline sliders
            let partColorDiv1R = document.getElementById('pRgb1')
            let partColorDiv1G = document.getElementById('prGb1')
            let partColorDiv1B = document.getElementById('prgB1')
            let partColorDiv2R = document.getElementById('pRgb2')
            let partColorDiv2G = document.getElementById('prGb2')
            let partColorDiv2B = document.getElementById('prgB2')
            let partColorDiv3R = document.getElementById('pRgb3')
            let partColorDiv3G = document.getElementById('prGb3')
            let partColorDiv3B = document.getElementById('prgB3')
            let partColorDiv4R = document.getElementById('pRgb4')
            let partColorDiv4G = document.getElementById('prGb4')
            let partColorDiv4B = document.getElementById('prgB4')
            let partColorDiv5R = document.getElementById('pRgb5')
            let partColorDiv5G = document.getElementById('prGb5')
            let partColorDiv5B = document.getElementById('prgB5')
            let noOfActorsDiv = document.getElementById('no_of_actors')
            // get the sample divs
            let backSample1 = document.getElementById('color_background_one')
            let backSample2 = document.getElementById('color_background_two')
            let partSample1 = document.getElementById('color_particle_one')
            let partSample2 = document.getElementById('color_particle_two')
            let partSample3 = document.getElementById('color_particle_three')
            let partSample4 = document.getElementById('color_particle_four')
            let partSample5 = document.getElementById('color_outline')

            // set background slider values
            backColorDiv1R.value = this.backgroundL.r
            backColorDiv1G.value = this.backgroundL.g
            backColorDiv1B.value = this.backgroundL.b
            backColorDiv2R.value = this.backgroundR.r
            backColorDiv2G.value = this.backgroundR.g
            backColorDiv2B.value = this.backgroundR.b
            // set particle slider values
            partColorDiv1R.value = this.pColor1.r
            partColorDiv1G.value = this.pColor1.g
            partColorDiv1B.value = this.pColor1.b

            partColorDiv2R.value = this.pColor2.r
            partColorDiv2G.value = this.pColor2.g
            partColorDiv2B.value = this.pColor2.b

            partColorDiv3R.value = this.pColor3.r
            partColorDiv3G.value = this.pColor3.g
            partColorDiv3B.value = this.pColor3.b

            partColorDiv4R.value = this.pColor4.r
            partColorDiv4G.value = this.pColor4.g
            partColorDiv4B.value = this.pColor4.b
            // Set default outlne color
            partColorDiv5R.value = this.outlineColor.r
            partColorDiv5G.value = this.outlineColor.g
            partColorDiv5B.value = this.outlineColor.b
            // set number of actors slider
            noOfActorsDiv.value = this.noOfActors
            // set the sample colors
            backSample1.style.background = `rgb(${this.targetBackgroundR.r}, ${this.targetBackgroundR.g}, ${this.targetBackgroundR.b})`
            backSample2.style.background = `rgb(${this.targetBackgroundL.r}, ${this.targetBackgroundL.g}, ${this.targetBackgroundL.b})`
            partSample1.style.background = `rgb(${this.pColor1.r}, ${this.pColor1.g}, ${this.pColor1.b})`
            partSample2.style.background = `rgb(${this.pColor2.r}, ${this.pColor2.g}, ${this.pColor2.b})`
            partSample3.style.background = `rgb(${this.pColor3.r}, ${this.pColor3.g}, ${this.pColor3.b})`
            partSample4.style.background = `rgb(${this.pColor4.r}, ${this.pColor4.g}, ${this.pColor4.b})`
            partSample5.style.background = `rgb(${this.outlineColor.r}, ${this.outlineColor.g}, ${this.outlineColor.b})`
    }

    createActor(){
            let radius = Math.random() * 3 + 1;
            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * this.actorSpeed;
            let dy = (Math.random() - 0.5) * this.actorSpeed;
            let actor = new Actor(x, y, dx, dy, radius)
            return actor
    }

    init(innerWidth, innerHeight){
            this.innerWidth = innerWidth
            this.innerHeight = innerHeight
            // Check local storage for existing defaults
            if(localStorage.length > 0){
                //load defaults from local storage
                this.load()
            }
            if (this.innerWidth * this.innerHeight < 270000){
                this.noOfActors = 400
            }
            this.allMyColorOneActors = [];
            this.allMyColorTwoActors = [];
            this.allMyColorThreeActors = [];
            this.allMyColorThreeActors = [];
            let perMyActors = Math.floor(this.noOfActors / 4)

            /* makes sure the loop puts roughly even amount of particals in to the the different
            arrays which can be treated differently. ie colored differently. For drawing purposes 
            and to have a mix of depth to each color each actor is also stored in a general array
            allMyActors*/
            for (var i = 0; i < perMyActors; i++){
                this.allMyColorOneActors.push(this.createActor())
                this.allMyColorTwoActors.push(this.createActor())
                this.allMyColorThreeActors.push(this.createActor())
                this.allMyColorFourActors.push(this.createActor())
            }
    }

    // updating custom values via user input
    changeActorAmount(newValue){
            this.noOfActors = newValue

            this.allMyColorOneActors = [];
            this.allMyColorTwoActors = [];
            this.allMyColorThreeActors = [];
            this.allMyColorThreeActors = [];
            let perMyActors = Math.floor(this.noOfActors / 4)

            /* makes sure the loop puts roughly even amount of particals in to the the different
            arrays which can be treated differently. ie colored differently. For drawing purposes 
            and to have a mix of depth to each color each actor is also stored in a general array
            allMyActors*/
            for (var i = 0; i < perMyActors; i++){
                this.allMyColorOneActors.push(this.createActor())
                this.allMyColorTwoActors.push(this.createActor())
                this.allMyColorThreeActors.push(this.createActor())
                this.allMyColorFourActors.push(this.createActor())
            }
    }
    
    updateBackgroundColor(r1, g1, b1, r2, g2, b2){
            console.log('update color ran in controller')
            this.targetBackgroundL.r = parseInt(r1)
            this.targetBackgroundL.g = parseInt(g1)
            this.targetBackgroundL.b = parseInt(b1)
            this.targetBackgroundR.r = parseInt(r2)
            this.targetBackgroundR.g = parseInt(g2)
            this.targetBackgroundR.b = parseInt(b2)
    }
    
    updateParticleColor(r1, g1, b1, r2, g2, b2, r3, g3, b3, r4, g4, b4, r5, g5, b5){
            console.log('update particle ran in controller')
            this.pColor1.r = r1
            this.pColor1.g = g1
            this.pColor1.b = b1

            this.pColor2.r = r2
            this.pColor2.g = g2
            this.pColor2.b = b2

            this.pColor3.r = r3
            this.pColor3.g = g3
            this.pColor3.b = b3

            this.pColor4.r = r4
            this.pColor4.g = g4
            this.pColor4.b = b4

            this.outlineColor.r = r5
            this.outlineColor.g = g5
            this.outlineColor.b = b5

    }

    // Methods for use by the animateLoop method.
    changeBackground(){
            if(this.testFrame){
                // console.log("testFrame")
                // console.log(this.backgroundL)
                // console.log(this.targetBackgroundL)
                this.testFrame = false
            }
            // console.log('changing background (controller changeBackground()')
            if(this.backgroundL.r > this.targetBackgroundL.r){this.backgroundL.r -= 1}
            if(this.backgroundL.g > this.targetBackgroundL.g){this.backgroundL.g -= 1}
            if(this.backgroundL.b > this.targetBackgroundL.b){this.backgroundL.b -= 1}
            if(this.backgroundR.r > this.targetBackgroundR.r){this.backgroundR.r -= 1}
            if(this.backgroundR.g > this.targetBackgroundR.g){this.backgroundR.g -= 1}
            if(this.backgroundR.b > this.targetBackgroundR.b){this.backgroundR.b -= 1}

            if(this.backgroundL.r < this.targetBackgroundL.r){this.backgroundL.r += 1}
            if(this.backgroundL.g < this.targetBackgroundL.g){this.backgroundL.g += 1}
            if(this.backgroundL.b < this.targetBackgroundL.b){this.backgroundL.b += 1}
            if(this.backgroundR.r < this.targetBackgroundR.r){this.backgroundR.r += 1}
            if(this.backgroundR.g < this.targetBackgroundR.g){this.backgroundR.g += 1}
            if(this.backgroundR.b < this.targetBackgroundR.b){this.backgroundR.b += 1}

            // canvas.style.background = `linear-gradient(to left, rgba(0, 0, 255, 1), rgba(0, 1, 0, 1))`

            canvas.style.background = `linear-gradient(to left, rgba(${this.backgroundL.r}, ${this.backgroundL.g}, ${this.backgroundL.b}, 1), rgba(${this.backgroundR.r}, ${this.backgroundR.g}, ${this.backgroundR.b}, 1))`
    }

    isColorSame(c1, c2){
            let result = true
            if (c1.r != c2.r){result = false}
            if (c1.g != c2.g){result = false}
            if (c1.b != c2.b){result = false}
            return result
    }

    // themes to dictate particle state
    zombieTheme(actors){
            for(let i = 0; i < actors.length; i++){
                actors[i].vector2D.x += actors[i].dx * this.influence;
                actors[i].vector2D.y += actors[i].dy * this.influence; 
            }

    }

    tunnelTheme(actors){
            for(let i = 0; i < actors.length; i++){
                actors[i].vector2D.x = this.mouse.x
                actors[i].vector2D.y = this.mouse.y
                if(actors[i].radius > this.innerWidth * 2 || actors[i].radius > this.innerHeight * 2){actors[i].radius = 0.1}
                if(actors[i].colorOpacity > 0){actors[i].colorOpacity = 0}

                actors[i].radius += (actors[i].radius/100) * (i /10)
            }
    }

    echoTheme(actors){
            
            for(let i = 0; i < actors.length; i++){
                if (actors[i].colorOpacity > 0){actors[i].colorOpacity = 0}
                if (actors[i].vector2D.x + actors[i].radius > this.innerWidth || actors[i].vector2D.x - actors[i].radius < 0){
                    actors[i].dx = -actors[i].dx;
                }
                if (actors[i].vector2D.y + actors[i].radius > this.innerHeight || actors[i].vector2D.y - actors[i].radius < 0){
                    actors[i].dy = -actors[i].dy;
                }

                actors[i].vector2D.x += actors[i].dx * this.influence;
                actors[i].vector2D.y += actors[i].dy * this.influence; 
                this.userSwell(actors[i])
            }
    }

    particlesTheme(actors){
            for(let i = 0; i < actors.length; i++){
                if (actors[i].colorOpacity < 1){actors[i].colorOpacity = 1}

                if (actors[i].vector2D.x + actors[i].radius > this.innerWidth || actors[i].vector2D.x - actors[i].radius < 0){
                    actors[i].dx = -actors[i].dx;
                }
                if (actors[i].vector2D.y + actors[i].radius > this.innerHeight || actors[i].vector2D.y - actors[i].radius < 0){
                    actors[i].dy = -actors[i].dy;
                }

                actors[i].vector2D.x += actors[i].dx * this.influence;
                actors[i].vector2D.y += actors[i].dy * this.influence; 
                this.userSwell(actors[i])
            }
    }

    rainTheme(actors){
        for(let i = 0; i < actors.length; i++){
            if (actors[i].colorOpacity < 1){actors[i].colorOpacity = 1}

            if (actors[i].vector2D.y > this.innerHeight){
                actors[i].vector2D.y = 0
            } else{
                actors[i].vector2D.y += (actors[i].speed + 0.2) * this.influence
            } 
            this.userSwell(actors[i])
        }
    }
    

    defaultTheme(actors){
        console.log(this.eventTime)
        if(this.eventTime > -1 && this.eventTime < 101){
            this.particlesTheme(actors)
        }else if(this.eventTime > 100 && this.eventTime < 201){
            this.rainTheme(actors)
        }else if(this.eventTime > 200 && this.eventTime < 301){
            this.echoTheme(actors)
        }
    }

    // user interaction themes
    userSwell(actor){
            if (mouse.x - actor.vector2D.x < this.cursorAreaOfEffect && mouse.x - actor.vector2D.x > -this.cursorAreaOfEffect && mouse.y - actor.vector2D.y < 50 && mouse.y - actor.vector2D.y > -50) {
                if (actor.radius < this.maxRadius){
                    actor.radius += 0.5;
                }
            }else if (actor.radius > this.minRadius){
                actor.radius -= 0.2;
            }
    }

    changeActors(){
            if(this.theme == 'default'){
                this.defaultTheme(this.allMyColorOneActors)
                this.defaultTheme(this.allMyColorTwoActors)
                this.defaultTheme(this.allMyColorThreeActors)
                this.defaultTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'particles'){
                this.particlesTheme(this.allMyColorOneActors)
                this.particlesTheme(this.allMyColorTwoActors)
                this.particlesTheme(this.allMyColorThreeActors)
                this.particlesTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'tunnel'){
                this.tunnelTheme(this.allMyColorOneActors)
                this.tunnelTheme(this.allMyColorTwoActors)
                this.tunnelTheme(this.allMyColorThreeActors)
                this.tunnelTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'zombie'){
                this.zombieTheme(this.allMyColorOneActors)
                this.zombieTheme(this.allMyColorTwoActors)
                this.zombieTheme(this.allMyColorThreeActors)
                this.zombieTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'rain'){
                this.rainTheme(this.allMyColorOneActors)
                this.rainTheme(this.allMyColorTwoActors)
                this.rainTheme(this.allMyColorThreeActors)
                this.rainTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'echo'){
                this.echoTheme(this.allMyColorOneActors)
                this.echoTheme(this.allMyColorTwoActors)
                this.echoTheme(this.allMyColorThreeActors)
                this.echoTheme(this.allMyColorFourActors)
            }            
            // default - loops through all the versions
            // Particles
            // Rain
            // Echo
            // Zombie?
            // tunnel?

            // what is the current theme
            
            // is it transitioning

            // whats the next theme
    }
   
    animateLoop(time) {
            let perMyActors = Math.floor(this.noOfActors / 4)

            for(let i=0; i < perMyActors; i++){
                // there is something wrong with the amount of actors actually created

                this.view.draw(this.allMyColorOneActors[i], this.pColor1, this.outlineColor)
                this.view.draw(this.allMyColorTwoActors[i], this.pColor2, this.outlineColor)
                this.view.draw(this.allMyColorThreeActors[i], this.pColor3, this.outlineColor)
                this.view.draw(this.allMyColorFourActors[i], this.pColor4, this.outlineColor)
            }

            // Modify the actors so that the animate
            this.changeActors()

            // if new background selected begin the change
            if(this.isColorSame(this.targetBackgroundL, this.backgroundL) &&
                this.isColorSame(this.targetBackgroundR, this.backgroundR)){
            }else{
                this.changeBackground()
            }



    //         if(this.transition){
    //             if(this.nextStateValue >= 1){
    //                 this.transition = false
    //                 this.initialState = this.nextState
    //                 this.initialStateValue = 1
    //                 this.nextStateValue = 0
    //             }else{
    //                 this.initialStateValue -= 0.01
    //                 this.nextStateValue += 0.01
    //             }
    //         }
    
            // blue rule
            // if (this.initialState == "blue"){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         var actor = this.allMyActors[i]
            //         actor.updateBlue(innerWidth, innerHeight, mouse, this.initialStateValue);
            //         actor.updateInteractiveSwell(mouse)
            //         if (actor.outlineA < 1){
            //             actor.outlineA += 0.01
            //         }
            //     }
            // }
    
            // if (this.nextState == 'blue' && this.transition == true){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         var actor = this.allMyActors[i]
            //         actor.updateBlue(innerWidth, innerHeight, mouse, this.nextStateValue);
            //         if (actor.colorA < 1){
            //             actor.colorA += 0.01
            //         }
            //     }
    
            //     if (this.backgroundR.b < 50){
            //         this.backgroundR.b += 1
            //         this.canvas.style.background = `linear-gradient(to left, rgba(0, 0, 
            //         ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
            //     }
            // }
    
    
            // rain
            // if (this.initialState == 'rain'){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.initialStateValue, this.cursorAreaOfEffect);
            //         this.allMyActors[i].updateInteractiveSwell(this.mouse)
            //     }
            // }
            // if (this.nextState == 'rain' && this.transition == true){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.nextStateValue, this.cursorAreaOfEffect);
            //     }
            // }
    
    
            // .........................echo..........................................
            // if (this.initialState == 'echo'){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         var actor = this.allMyActors[i]
            //         actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
            //         actor.updateInteractiveEchoSwell(mouse)
            //     }
            // }
    
            // if (this.nextState == 'echo' && this.transition == true){
            //     for (var i = 0; i < this.allMyActors.length; i++){
            //         var actor =this.allMyActors[i]
            //         actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
            //         actor.updateInteractiveEchoSwell(mouse)
            //         if (actor.colorA > 0){
            //             actor.colorA -= 0.01
            //         }
            //     }
            //     if (this.backgroundR.b > 0){
            //             this.backgroundR.b -= 2
            //             canvas.style.background = `linear-gradient(to left, rgba(0, 0, ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
            //     }
              
            // }

    }
}