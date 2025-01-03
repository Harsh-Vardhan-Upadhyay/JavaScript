// Create a new Date object representing the current date and time
// The 'new' keyword is used to create an instance of the Date object
let myDate = new Date(); 

// Convert the date to a readable string format (e.g., "Thu Jan 02 2025") and log it to the console
console.log(myDate.toDateString()); 

// Create a new Date object for a specific date
// The 'new' keyword is required to instantiate a new Date object with the given parameters
// The parameters for the Date constructor are (year, month, day)
// Note: Months in JavaScript are zero-indexed (0 = January, 1 = February, ..., 11 = December)
let myCreatedDate = new Date(2023, 0, 23); 

// Convert the specified date to a readable string format and log it to the console
console.log(myCreatedDate.toDateString()); 