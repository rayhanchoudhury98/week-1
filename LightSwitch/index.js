const body = document.body;
const headerONe = document.getElementById("headerOne");
const buttonOne = document.getElementById("buttonOne");

let toggle = true;

buttonOne.addEventListener("click", () => {


if (toggle == true) {
    

console.log("it is true.")
darkBackground()
toggle = false;

}

else {
    console.log("it is false.")
    lightBackground()

toggle = true;

}

})

const lightBackground = () => {
    body.style.backgroundColor = "white";
headerOne.style.color = "back";
}



const darkBackground = () => {
    body.style.backgroundColor = "black";
    headerOne.style.color = "white";

}


console.log(typeof body)
console.log(typeof body)
console.log(typeof body)

