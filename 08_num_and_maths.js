const score = 400;
console.log(score);
console.log(typeof(score))

const balance = new Number(100);
console.log(balance);



console.log(balance.toString().length); //This is used to identify the number of characters present in the string
console.log(balance.toFixed(2));// This is used to fix the number of digits afterh the point in a number 

const otherNumber = 23.90342578349
console.log(otherNumber.toPrecision(2))//This is used to round of the value 
console.log(otherNumber.toPrecision(1))// this showes the output in exponense that means we need to use this carefully 


const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'))