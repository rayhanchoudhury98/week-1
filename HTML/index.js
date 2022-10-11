const headerOne = document.getElementById("headerOne");
const headerTwo = document.getElementById("headerTwo");
const headerThree = document.getElementById("headerThree");

const button = document.getElementById("button");

let number = 0;

button.addEventListener("click", () => {
    // if the number variable gets to 10, I want to reset the count to 0 and then carry on
    if (number == 10)
    {
        number = 0;
    }
    number++;
    headerThree.textContent = number;
    
})


headerOne.style.color = "crimson";
// headerOne.style.fontSize = "200px";
headerOne.style.textDecoration = "underline";

headerTwo.style.color = "pink";

headerThree.style.color = "green";