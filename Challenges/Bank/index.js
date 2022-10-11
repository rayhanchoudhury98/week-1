let accountBalance = 100;
let userPin = 1234;

let userInput;


userInput = prompt("Enter your pin")

if(userPin == 1234) {

    console.log("Thank you for your pin, please continue")

function options(){
    userInput = prompt("Please choose an option, enter 1, 2 or 3: \n 1. Withdrawal \n 2. Deposit \n 3. Check Balance ")

if (userInput == 1) {
    userInput = prompt("How much would you like to withdraw? \n 1. £10 \n 2. £20" )
    if (userInput == 10 || userInput == 1){
    withdraw(10);
}else if (userInput == 20 || userInput == 1) {
    withdraw(20)
} else {
    console.log("Wrong entry")
}


} else if (userInput == 2) {
    userInput = prompt("How much would you like to deposit? \n 1. £10 \n 2. £20" )
    if (userInput == 10 || userInput == 1){
    deposit(10);
}else if (userInput == 20 || userInput == 1) {
    deposit(20)
} else {
    console.log("Wrong entry")
}



}else if (userInput == 3) {
    console.log(`Your Balance is: ${accountBalance}.`)
}else{
    console.log("Wrong entry, please try again.")
    options()
} 



}
}

options()



function withdraw(amount) {
    accountBalance -= amount;
    console.log(`Your new account balance is: £${accountBalance}`);
}


function deposit(amount) {
    accountBalance += amount;
    console.log(`Your new account balance is: £${accountBalance}`);
}