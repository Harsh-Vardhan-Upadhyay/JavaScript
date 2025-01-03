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