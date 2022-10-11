alert("You need some milk")

let userInput = prompt("Hello, how are you? Good, Bad or Indifferent");

console.log(userInput);

if (userInput == "good") {
    console.log("I am glad");
    userInput = prompt("Who do you work for?")


    if (userInput == "Deloitte" || userInput == "deloitte") {
        
        deloitteEmployee()

    }
    else if (userInput == "Firebrand" || userInput == "firebrand") 

      { console.log("Are you an Instructor?")
    }
    
} 
else {
    console.log("I am sorry to hear that pal")
}

function deloitteEmployee(){
    console.log("welcome to Deloitte")
    userInput = prompt("What is your staff ID?")
    console.log(`Welcome, Staff Number: ${userInput}`)
}

function FirebrandEmployee() {

    console.log("You're in an Instructor")
    userInput =prompt("Who are you teaching?")
    console.log(userInput)


}