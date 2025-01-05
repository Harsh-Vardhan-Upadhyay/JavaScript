// A regular function declaration named 'instant'.
// This function can be invoked later as needed.
function instant() {
    console.log("DB connected");
}

// Calling the 'instant' function explicitly.
instant();

// An Immediately Invoked Function Expression (IIFE).
// This function is defined and immediately executed without needing to call it separately.
(function instant() {
    console.log("DB connected");
})(); // The parentheses () after the function definition immediately invoke it.





// Without IIFE
var dbConfig = "Global DB Config"; // Global variable

function connectToDB() {
    var dbConfig = "Local DB Config"; // Overwrites if you're not careful
}

// Using IIFE
(function () {
    var dbConfig = "Local DB Config"; // This stays private
    console.log(dbConfig);
})();

console.log(dbConfig); // Still "Global DB Config"




(function (name) {
    console.log(`Hello ${name}`);
})("Harsh");