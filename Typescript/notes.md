let myrName : string = "Rayhan";

let myrAge = 24;

if (myrAge < 18) {

    console.log("You are not allowed in.");

} else if (myrAge < 30) {

    console.log("You are eligible for a discount")
    
} else {
    
    console.log("You are too old")
}
let myAge = 24;

function birthday(): void {
console.log("it is your birthday");
myAge++
}


birthday()
birthday()
birthday()

function addition(numberOne: number, numberTwo: number)
{

console.log(numberOne + numberTwo);
}

addition(10,10)


function subtraction(numberOne: number, numberTwo: number){

    return numberOne - numberTwo
}

let answer: number = subtraction(30,10)
console.log(answer)

function info(firstName: string, secondName: string, age: Number, location: string){

console.log("Hi, " + firstName + " " + secondName + ". You are " + age + " years old. You live in " + location + ".")

console.log(`Hi, ${firstName} ${secondName}. You are ${age} years old. You live in ${location}.`)

}

info("Rayhan", "Choudhury", 24, "Birmingham")
