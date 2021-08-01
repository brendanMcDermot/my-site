class Controller{
        constructor(view, innerWidth, innerHeight, mouse, canvas){
            this.view = view;
            this.innerWidth = innerWidth;
            this.innerHeight = innerHeight;
            this.mouse = mouse;
            this.canvas = canvas

            this.theme = 'particles'
            this.influence = 2

            // this.isColorChange = false,
            // this.transition = false,
            // this.currentState = "particle",
            // this.nextState = "rain",
            // this.initialStateValue = 1,
            // this.nextStateValue = 0

            this.backgroundL = {r: 0, g: 0, b: 0, a: 1}
            this.targetBackgroundL = {r: 0, g: 0, b: 0, a: 1}
            this.backgroundR = {r: 0, g: 0, b: 50, a: 1}
            this.targetBackgroundR = {r: 0, g: 0, b: 50, a: 1}
            this.pColor1 = {r: 0, g: 0, b: 25}
            this.pColor2 = {r: 0, g: 0, b: 50}
            this.pColor3 = {r: 0, g:0, b: 75}
            this.pColor4 = {r: 0, g: 0, b: 100}
            this.outlineColor = {r: 0, g: 0, b: 0}

            this.allMyColorOneActors = [];
            this.allMyColorTwoActors = [];
            this.allMyColorThreeActors = [];
            this.allMyColorFourActors = [];
            this.maxRadius = 40;
            this.noOfActors = 800;
            this.actorSpeed = 2;
            this.cursorAreaOfEffect = 30

            this.testFrame = true
        }

        // Initialise Load and save methods
        save(){
            console.log("save ran in controller")
            let customValues = {
                backgroundL: this.backgroundL,
                backgroundR: this.backgroundR,
                noOfActors: this.noOfActors,
                pColor1: this.pColor1,
                pColor2: this.pColor2,
                pColor3: this.pColor3,
                pColor4: this.pColor4
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
            this.canvas.style.background = canvas.style.background = `linear-gradient(to left, rgb(${this.backgroundL.r}, ${this.backgroundL.g}, ${this.backgroundL.b}), rgb(${this.backgroundR.r}, ${this.backgroundR.g}, ${this.backgroundR.b}))`


            console.log("cValue")
            console.log(cValues)
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

            this.setControllerValues()
        }

        setControllerValues(){
            let backColorDiv1R = document.getElementById('Rgb1')
            let backColorDiv1G = document.getElementById('rGb1')
            let backColorDiv1B = document.getElementById('rgB1')
            let backColorDiv2R = document.getElementById('Rgb2')
            let backColorDiv2G = document.getElementById('rGb2')
            let backColorDiv2B = document.getElementById('rgB2')

            backColorDiv1R.value = this.backgroundL.r
            backColorDiv1G.value = this.backgroundL.g
            backColorDiv1B.value = this.backgroundL.b
            backColorDiv2R.value = this.backgroundR.r
            backColorDiv2G.value = this.backgroundR.g
            backColorDiv2B.value = this.backgroundR.b
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
            let colorToggle = 0
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
    
        updateParticleColor(r1, g1, b1, r2, g2, b2, r3, g3, b3, r4, g4, b4, r5, b5, g5){
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
                console.log("testFrame")
                console.log(this.backgroundL)
                console.log(this.targetBackgroundL)
                this.testFrame = false
            }
            console.log('changing background (controller changeBackground()')
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
        zombieTheme(){

        }

        tunnelTheme(){

        }

        echoTheme(){

        }


        particlesTheme(actors){
            for(let i = 0; i < actors.length; i++){
                if (actors[i].vector2D.x + actors[i].radius > this.innerWidth || actors[i].vector2D.x - actors[i].radius < 0){
                    actors[i].dx = -actors[i].dx;
                }
                if (actors[i].vector2D.y + actors[i].radius > this.innerHeight || actors[i].vector2D.y - actors[i].radius < 0){
                    actors[i].dy = -actors[i].dy;
                }

                actors[i].vector2D.x += actors[i].dx * this.influence;
                actors[i].vector2D.y += actors[i].dy * this.influence; 
            }
        }

        rainTheme(actors){
            for(let i = 0; i < actors.length; i++){
                if (actors[i].vector2D.y > this.innerHeight){
                    actors[i].vector2D.y = 0
                } else{
                    actors[i].vector2D.y += (actors[i].speed + 3) * this.influence
                } 
            }
        }

        defaultTheme(){

        }

        // user interaction themes

        changeActors(){
            if(this.theme == 'default'){console.log(this.theme)}
            else if(this.theme == 'particles'){
                this.particlesTheme(this.allMyColorOneActors)
                this.particlesTheme(this.allMyColorTwoActors)
                this.particlesTheme(this.allMyColorThreeActors)
                this.particlesTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'rain'){
                this.rainTheme(this.allMyColorOneActors)
                this.rainTheme(this.allMyColorTwoActors)
                this.rainTheme(this.allMyColorThreeActors)
                this.rainTheme(this.allMyColorFourActors)
            }
            else if(this.theme == 'echo'){console.log(this.theme)}            
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

            for(i=0; i < perMyActors; i++){
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
                console.log('the if is true for backgrounds being equal')
            }else{
                this.changeBackground()
            }





            // if(time == 100){
            //     this.initialState = 'blue'
            //     this.nextState = 'rain'
            //     this.transition = true;
            // }
    
            // if(time == 200){
            //     this.initialState = 'rain'
            //     this.nextState = 'echo'
            //     this.transition = true
            // }
    
            // if (time == 300){
            //     this.initialState = 'echo'
            //     this.nextState = 'blue'
            //     this.transition = true;
            // }
    
            // check for transition
            if(this.transition){
                if(this.nextStateValue >= 1){
                    this.transition = false
                    this.initialState = this.nextState
                    this.initialStateValue = 1
                    this.nextStateValue = 0
                }else{
                    this.initialStateValue -= 0.01
                    this.nextStateValue += 0.01
                }
            }
    
            // blue rule
            if (this.initialState == "blue"){
                for (var i = 0; i < this.allMyActors.length; i++){
                    var actor = this.allMyActors[i]
                    actor.updateBlue(innerWidth, innerHeight, mouse, this.initialStateValue);
                    actor.updateInteractiveSwell(mouse)
                    if (actor.outlineA < 1){
                        actor.outlineA += 0.01
                    }
                }
            }
    
            if (this.nextState == 'blue' && this.transition == true){
                for (var i = 0; i < this.allMyActors.length; i++){
                    var actor = this.allMyActors[i]
                    actor.updateBlue(innerWidth, innerHeight, mouse, this.nextStateValue);
                    if (actor.colorA < 1){
                        actor.colorA += 0.01
                    }
                }
    
                if (this.backgroundR.b < 50){
                    this.backgroundR.b += 1
                    this.canvas.style.background = `linear-gradient(to left, rgba(0, 0, 
                    ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
                }
            }
    
    
            // rain
            if (this.initialState == 'rain'){
                for (var i = 0; i < this.allMyActors.length; i++){
                    this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.initialStateValue, this.cursorAreaOfEffect);
                    this.allMyActors[i].updateInteractiveSwell(this.mouse)
                }
            }
            if (this.nextState == 'rain' && this.transition == true){
                for (var i = 0; i < this.allMyActors.length; i++){
                    this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.nextStateValue, this.cursorAreaOfEffect);
                }
            }
    
    
            // .........................echo..........................................
            if (this.initialState == 'echo'){
                for (var i = 0; i < this.allMyActors.length; i++){
                    var actor = this.allMyActors[i]
                    actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
                    actor.updateInteractiveEchoSwell(mouse)
                }
            }
    
            if (this.nextState == 'echo' && this.transition == true){
                for (var i = 0; i < this.allMyActors.length; i++){
                    var actor =this.allMyActors[i]
                    actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
                    actor.updateInteractiveEchoSwell(mouse)
                    if (actor.colorA > 0){
                        actor.colorA -= 0.01
                    }
                }
                if (this.backgroundR.b > 0){
                        this.backgroundR.b -= 2
                        canvas.style.background = `linear-gradient(to left, rgba(0, 0, ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
                }
              
            }
    
            // for (var i = 0; i < this.allMyActors.length; i++){
            //     view.draw(this.allMyActors[i]);
            // }
        }
    }






























































































// class Controller{
//     constructor(view, innerWidth, innerHeight, mouse, canvas){
//         this.canvas = canvas
//         this.isColorChange = false,
//         this.transition = false,
//         this.initialState = "blue",
//         this.nextState = "rain",
//         // this.transitionRate = 0.01, // as a percentage
//         // this.colorChangeMilliseconds = 100,
//         this.initialStateValue = 1,
//         this.nextStateValue = 0
//         this.view = view;
//         this.innerWidth = innerWidth;
//         this.innerHeight = innerHeight;
//         this.mouse = mouse;
//         this.backgroundL = {r: 0, g: 0, b: 0, a: 1}
//         this.backgroundR = {r: 0, g: 0, b: 50, a: 1}
//         this.allMyActors = [];
//         this.maxRadius = 40;
//         this.noOfActors = 800;
//         this.actorSpeed = 2;
//         this.cursorAreaOfEffect = 30
//     }

//     init(innerWidth, innerHeight){
//         if (this.innerWidth * this.innerHeight < 270000){
//             this.noOfActors = 400
//         }
//         this.allMyActors = [];
//         for (var i = 0; i < this.noOfActors; i++){
//             var radius = Math.random() * 3 + 1;
//             var x = Math.random() * (innerWidth - radius * 2) + radius;
//             var y = Math.random() * (innerHeight - radius * 2) + radius;
//             var dx = (Math.random() - 0.5) * this.actorSpeed;
//             var dy = (Math.random() - 0.5) * this.actorSpeed;
//             var blues = [[0, 0, 25, 1], [0, 0, 50, 1], [0, 0, 75, 1], [0, 0, 100, 1], [0, 0, 150, 1]];
//             var colorIndex = Math.floor(Math.random() * 4)
//             var colorR = blues[colorIndex][0]
//             var colorG = blues[colorIndex][1]
//             var colorB = blues[colorIndex][2]
//             var colorA = blues[colorIndex][3]


//             this.allMyActors.push(new Actor(x, y, dx, dy, radius, this.maxRadius, colorR, colorG, colorB, colorA, colorIndex))
//         }
//     }

//     updateBackgroundColor(r1, g1, b1, r2, g2, b2){
//         console.log('update color ran in controller')
//         this.backgroundL.r = r1
//         this.backgroundL.g = g1
//         this.backgroundL.b = b1
//         this.backgroundR.r = r2
//         this.backgroundR.g = g2
//         this.backgroundR.b = b2
//         console.log(this.backgroundL)
//         console.log(this.backgroundR)
//     }

//     updateParticleColor(r1, g1, b1, r2, g2, b2, r3, g3, b3, r4, g4, b4){
//         console.log('update particle ran in controller')

//     }


//     frameCounter(){
//         let fc = performance.now()
        
//     }

//     animateLoop(time) {
//         if(time == 100){
//             this.initialState = 'blue'
//             this.nextState = 'rain'
//             this.transition = true;
//         }

//         if(time == 200){
//             this.initialState = 'rain'
//             this.nextState = 'echo'
//             this.transition = true
//         }

//         if (time == 300){
//             this.initialState = 'echo'
//             this.nextState = 'blue'
//             this.transition = true;
//         }

//         // check for transition
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

//         // blue rule
//         if (this.initialState == "blue"){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 var actor = this.allMyActors[i]
//                 actor.updateBlue(innerWidth, innerHeight, mouse, this.initialStateValue);
//                 actor.updateInteractiveSwell(mouse)
//                 if (actor.outlineA < 1){
//                     actor.outlineA += 0.01
//                 }
//             }
//         }

//         if (this.nextState == 'blue' && this.transition == true){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 var actor = this.allMyActors[i]
//                 actor.updateBlue(innerWidth, innerHeight, mouse, this.nextStateValue);
//                 if (actor.colorA < 1){
//                     actor.colorA += 0.01
//                 }
//             }

//             if (this.backgroundR.b < 50){
//                 this.backgroundR.b += 1
//                 this.canvas.style.background = `linear-gradient(to left, rgba(0, 0, 
//                 ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
//             }
//         }


//         // rain
//         if (this.initialState == 'rain'){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.initialStateValue, this.cursorAreaOfEffect);
//                 this.allMyActors[i].updateInteractiveSwell(this.mouse)
//             }
//         }
//         if (this.nextState == 'rain' && this.transition == true){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 this.allMyActors[i].updateRain(innerWidth, innerHeight, mouse, this.nextStateValue, this.cursorAreaOfEffect);
//             }
//         }


//         // .........................echo..........................................
//         if (this.initialState == 'echo'){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 var actor = this.allMyActors[i]
//                 actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
//                 actor.updateInteractiveEchoSwell(mouse)
//             }
//         }

//         if (this.nextState == 'echo' && this.transition == true){
//             for (var i = 0; i < this.allMyActors.length; i++){
//                 var actor =this.allMyActors[i]
//                 actor.updateEcho(innerWidth, innerHeight, mouse, this.initialStateValue);
//                 actor.updateInteractiveEchoSwell(mouse)
//                 if (actor.colorA > 0){
//                     actor.colorA -= 0.01
//                 }
//             }
//             if (this.backgroundR.b > 0){
//                     this.backgroundR.b -= 2
//                     canvas.style.background = `linear-gradient(to left, rgba(0, 0, ${this.backgroundR.b}, 1), rgba(0, 1, 0, 1))`
//             }
          
//         }

//         for (var i = 0; i < this.allMyActors.length; i++){
//             view.draw(this.allMyActors[i]);
//         }
//     }
//     backgroundToString(){
//         return `linear-gradient(to left, rgba(${this.backgroundL.r}, ${this.backgroundL.g}, ${this.backgroundL.b}, ${this.backgroundL.a}), `+
//         `(${this.backgroundR.r}, ${this.backgroundR.g}, ${this.backgroundR.b}, ${this.backgroundR.a})`
//     }
// }
