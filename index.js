
let celcius = [23, 140, 212, 41]
const arrayBox = document.querySelectorAll(".ArrayBox")

function getCelcius() {
    console.log(celcius.map(grad => grad * (9/5) + 32)) 
}

getCelcius