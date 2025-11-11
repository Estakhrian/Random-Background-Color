// First way with color name

// let colorsArray = ["red", "yellow", "blue", "pink", "gray", "green", "black"]
// let randomColorIndex = null


// setInterval(()=> {
//     randomColorIndex = Math.floor(Math.random() * colorsArray.length)
//     document.body.style.backgroundColor = colorsArray[randomColorIndex]
// }, 3000)


// ////// Second way with rgb ////////////////////////////

let redColor, greenColor, blueColor, finalRgbColor
let titlePage = document.querySelector(".title")


setInterval(() => {

    redColor = Math.floor(Math.random() * 255)
    greenColor = Math.floor(Math.random() * 255)
    blueColor = Math.floor(Math.random() * 255)
    finalRgbColor = "rgb(" + redColor + "," + greenColor +"," + blueColor + ")"

    console.log(finalRgbColor)

    document.body.style.backgroundColor = finalRgbColor
    titlePage.innerHTML = "Background Color Code : " + finalRgbColor

},2000)
