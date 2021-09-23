
const arrayBox = document.querySelector("#ArrayBox");
let arr = [10, 20, 30];

function ausgabe(arr){
    arrayBox.innerHTML = "hallo Welt: " + arr[0] + " " + arr[1];
}

function toCelsiusOne(arr){
    let celsius = [];
    for(let i=0; i < arr.length; i++){
        celsius.push(((arr[i]-32)*5/9).toFixed(1));
    }
    arrayBox.innerHTML = celsius;
}

function fToC(zahl){
    return ((zahl-32)*5/9).toFixed(1);
}			

function toCelsiusTwo(arr){
    arrayBox.innerHTML = arr.map(Element => fToC(Element));
}

toCelsiusOne([0, 20, 32]);