

const navBar = document.querySelector("#sideNavBar")
const menuButtonOne = document.querySelector("#menuBtnOne")
const menuButtonTwo = document.querySelector("#menuBtnTwo")

menuButtonOne.addEventListener("click", () => {
    console.log("clicked")
 slideAway()
     
})
menuButtonTwo.addEventListener("click", () => {
    console.log("clicked")
 slideBack()
     
})


function slideAway() {
    navBar.classList.add("slides")
    navBar.classList.remove("slide")
}

function slideBack() {
    navBar.classList.add("slide")
    navBar.classList.remove("slides")
}