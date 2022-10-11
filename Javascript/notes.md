



### convetion.js

let myName = "Rayhan";
// variable is created called myName, we have stored the value Rayhan   / let is a declaration 
let sum = 12 + 12;
console.log(myName);
console.log(sum);

let myAge = 24;
console.log(myAge); 
myAge++
console.log(myAge);
myAge--
console.log(myAge); 

let lightOn = true; 

let distanceInKm = 10; 

### variable.js

let myName = "Jacob";
let myAge = 57;
let lightOn = true;
let noValue = undefined;

// variable is created called myName
// in that variable, we have stored the value Jacob

// Softly-typed language
// we don't have to declare the type of data we are using

// strings, numbers, booleans, undefined

// A variable is a value that can change
// javascript is less strict than other languages...

// console.log(myAge);
myAge = "John";
myAge = 43;
myAge = "cheese";
myAge = 123;
console.log(myAge);
console.log(typeof myAge)

// variables on a journey to work
// weather, traffic, transport, money, tiredness, happiness

const dateOfBirth = "01/01/2000" 
// const means that the data cannot change
// dateOfBirth = "01/01/2000"
console.log(dateOfBirth)
// 02/01/2000  

### Conditionals.js

let myAge = 15;
let myName = "Daniel";

if (myAge < 18) 
{
    console.log("You are not allowed in the club.");
}
else if (myAge < 30)
{
    console.log("You are eligible for the young person's discount");
}
else if (myAge < 50)
{
    console.log("You are allowed in the club. Full price.");
}
else if (myAge < 90)
{
    console.log("You are allowed in the club. Senior discount.")
} 
else {
    console.log("You are allowed in for free.");
}


if (myName == "Jacob")
{
    console.log("Hello, Jacob");
}
else if (myName == "Bob")
{
    console.log("Hello, Bob");
}
else if (myName == "Steve")
{
    console.log("Hello, Steve");
}
else {
    console.log("I don't recognise you.");
}


myName = "ELENA";

switch (myName) {
    case "Moaaz":
    case "moaaz":
        console.log("Hello, Moaaz");
        break;
    case "Jesal":
        console.log("Hello, Jesal");
        break;
    case "Odelette":
        console.log("Hello, Odelette");
        break;
    case "elena":
    case "Elena":
    case "ELENA":
        console.log("Hello, Elena");
        break;

    default:
        console.log("I don't recognise you");
        break;
}


let carBrand = "Lexus";

switch (carBrand) {
    case "Mercedes":
        console.log("A German brand");
        break;
    case "Ford":
        console.log("An American brand")
        break;
    default: // else statement but for switch case
        console.log("I don't know that car brand.")
        break;
}


### Assignment.js

let myNumber = 10;

myNumber = 10;

myNumber = myNumber + 20; // 30
myNumber = myNumber + 20; // 50
myNumber = myNumber + 20; // 70
myNumber += 20; // 90. this is the same as doing the line above
// left = the left + the right
// myNumber is = to itself + the right-hand value
// what is the value of myNumber? 90
myNumber + 20; // 110
myNumber + 20; // 110
console.log(myNumber)

myNumber -= 30; //
console.log(myNumber)
myNumber -= 30; //
console.log(myNumber)
myNumber -= 30; //
console.log(myNumber)

myNumber += 5;

myNumber *= 10;
console.log(myNumber)


### Loops and while

let myAge = 4;
let number = 0;

// 5, 13, 7, 88, 9

// let myAge = 4; // definition and declaration of the variable
// let myAge; // declaration of the variable
// myAge = 4; // definition

while (myAge < 97) {
    console.log("Happy birthday, you are " + myAge + " years old.");
    number++;
    console.log(number)
    myAge++; // is 4 less than 97? 
    // ++ just means add 1
}

// what do you think is going on here?

// whilst the condition is less than the number it is being compared to, it will console log and add one to the myAge variable


## Extra

let myAge = "57";
// we create a string called myAge with the value 57

let myString = "1";
let myNumber = 1;

let answer;

answer = myString + myNumber;

console.log(answer);
console.log(typeof answer);

answer -= 5;
console.log(answer);
console.log(typeof answer);

answer += "15";
console.log(answer);
console.log(typeof answer);

if (myAge === 57)
{
    // the value AND the type that we give it
    // we give the value 57 but not the number 57. We give it the string "57"
    console.log("You gave me the NUMBER 57.")
}
else if (myAge == 57) {
    console.log("WooHoo. You are equal to the value 57.")
}
else {
    console.log("Oh nooooooo....")
}