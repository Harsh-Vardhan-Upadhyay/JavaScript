// This is a function named 'addTwoNumbers' which takes two inputs (parameters): 'a' and 'b'
function addTwoNumbers(a, b) {
    // The function calculates the sum of 'a' and 'b' and logs the result to the console
    console.log(a + b); // This directly logs the sum of 'a' and 'b' to the console

    // The sum of 'a' and 'b' is stored in a variable named 'result'
    let result = a + b;

    // The 'return' statement sends the value of 'result' back to where the function was called
    return result;
}

// This is where we call (invoke) the function 'addTwoNumbers' and provide two arguments (1 and 2)
// These arguments will replace the parameters 'a' and 'b' inside the function
console.log(addTwoNumbers(1, 2)); 
// Here, the function is called, and the returned value is logged to the console using console.log()
// This prints the result twice: 
// - First, the sum is logged inside the function (via console.log(a + b))
// - Then, the returned value is logged outside the function

// Example of storing the returned value in a variable
let sum = addTwoNumbers(3, 4); // The function is called with arguments 3 and 4, and the returned value is stored in 'sum'

// This logs the stored result to the console
console.log("The sum is:", sum); // Prints: "The sum is: 7"

// Note: The 'return' statement is crucial for cases where you want to use the result later
// For example, you can pass the returned value to another function or perform additional calculations
let multipliedResult = sum * 2;
console.log("The multiplied result is:", multipliedResult); // Prints: "The multiplied result is: 14" 


function userMessage(user) {
    return `${user} succesfully logged in`
}

console.log(userMessage("Harsh"))



// A function to calculate the total cart price by dynamically accepting any number of arguments
function totalCartPrice(...num1) {
    // 'num1' is a rest parameter that captures all passed arguments into an array
    return num1; // This currently just returns the array of prices without calculating the total
}

// Calling the function with multiple price values to test dynamic intake
console.log(totalCartPrice(200, 200, 300)); // This will log: [200, 200, 300]


// Defining an object to represent a user
const user = {
    userName: "Harsh", // The user's name (note: it must be a string, enclosed in quotes)
    userId: 31         // The user's ID
};

// Defining a function to work with objects
function handleObject(anyObj) {
    // Accessing properties of the object passed as an argument using dot notation
    return `The user name is ${anyObj.userName} and their ID is ${anyObj.userId}`;
}

// Calling the function with the 'user' object and logging the result
console.log(handleObject(user)); 
// Expected output: "The user name is Harsh and their ID is 31"


// Defining an array 
const myNewArray = [1, 2, 3]; 

// Defining a function that takes an array as input
function returnSecondValue(getArray) {
    // Accessing the second element of the array using its index (1) 
    // and returning it as the function's output
    return getArray[1];
}

// Calling the function with 'myNewArray' as the argument
// This passes the array to the function where the second element is accessed
console.log(returnSecondValue(myNewArray)); 
