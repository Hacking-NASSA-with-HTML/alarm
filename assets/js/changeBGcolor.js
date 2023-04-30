
const body = document.getElementById('body')
const paragraphFontColor = document.querySelector('.paragraph')


body.style.backgroundColor = "green"
paragraphFontColor.style.color = "red"

function blinkScreen() {
    if (body.style.backgroundColor === "green") {
        body.style.backgroundColor = "red"
        paragraphFontColor.style.color = "green"
    }
    else {
        body.style.backgroundColor = "green"
        paragraphFontColor.style.color = "red"
    }
}

setInterval(blinkScreen, 800)
