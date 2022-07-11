function customiseSections() {
    var defaults = localStorage.getItem("customValues");
    let theme = JSON.parse(defaults)

    let sections = document.getElementsByTagName("section")

    let colors = []
    colors.push([`rgba(${theme.backgroundL.r}, ${theme.backgroundL.g}, ${theme.backgroundL.b}`, ",0.4)", 
    theme.backgroundL.r + theme.backgroundL.g + theme.backgroundL.b])
    colors.push([`rgba(${theme.backgroundR.r}, ${theme.backgroundR.g}, ${theme.backgroundR.b}`, ",0.4)", 
    theme.backgroundR.r + theme.backgroundR.g + theme.backgroundR.b])
    colors.push([`rgba(${theme.pColor1.r}, ${theme.pColor1.g}, ${theme.pColor1.b}`, ",0.4)",
    theme.pColor1.r + theme.pColor1.g + theme.pColor1.b])
    colors.push([`rgba(${theme.pColor2.r}, ${theme.pColor2.g}, ${theme.pColor2.b}`, ",0.4)", 
    theme.pColor2.r + theme.pColor2.g + theme.pColor2.b])
    colors.push([`rgba(${theme.pColor3.r}, ${theme.pColor3.g}, ${theme.pColor3.b}`, ",0.4)", 
    theme.pColor3.r + theme.pColor3.g + theme.pColor3.b])
    colors.push([`rgba(${theme.pColor4.r}, ${theme.pColor4.g}, ${theme.pColor4.b}`, ",0.4)", 
    theme.pColor4.r + theme.pColor4.g + theme.pColor4.b])

    let iterator = 1
    for (let i = 0; i < sections.length; i++) {
        if (i < colors.length * iterator) {
            let x = colors.length + (i - colors.length * iterator)
            if (i % 2 == 0) {
                sections[i].style.backgroundColor = colors[x][0] + ",0.1)"
            } else {
                sections[i].style.backgroundColor = colors[x][0] + colors[x][1]
                console.log(colors[x][2])
                if (colors[x][2] < 500){
                    sections[i].style.color = "rgb(255, 255, 255)"
                }
            }

        } else {
            let x = i - colors.length * iterator
            sections[i].style.backgroundColor = colors[x][0] + colors[x][1]
            iterator += 1
        }
    }
}
