console.log("about script running")

function customise(){
    var defaults = localStorage.getItem("customValues");
    let theme = JSON.parse(defaults)

    console.log(theme)
    console.log(theme.backgroundL)


    let sdCont = document.getElementById("about_software_developer")
    let pCont = document.getElementById("about_projects")
    let lfCont = document.getElementById("about_languages_frameworks")
    let hCont = document.getElementById("about_hobbies")

    sdCont.style.backgroundColor = `rgba(${theme.backgroundL.r}, ${theme.backgroundL.g}, ${theme.backgroundL.b}, 0.1)`
    pCont.style.backgroundColor = `rgba(${theme.backgroundL.r}, ${theme.backgroundL.g}, ${theme.backgroundL.b}, 0.6)`
    lfCont.style.backgroundColor = `rgba(${theme.backgroundR.r}, ${theme.backgroundR.g}, ${theme.backgroundR.b}, 0.1)`
    hCont.style.backgroundColor = `rgba(${theme.backgroundR.r}, ${theme.backgroundR.g}, ${theme.backgroundR.b}, 0.6)`
}
window.onload = function() {
    customise();
  };