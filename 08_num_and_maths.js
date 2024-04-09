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








//*********************************MATHS*********************************



console.log(Math)
console.log(Math.abs(-4));// This is used to remove the negative value and make it positive
console.log(Math.round(4.6))// This is used to round off the value 
console.log(Math.ceil(4.2))// This will round off the value to the higest one 
console.log(Math.floor(4.9))// This will round off to the lower value 
console.log(Math.min(4,3,5))// This will give you the minimum value among these
console.log(Math.max(5,7,3))// This will give the maximum value amongs the value given

console.log(Math.random());// This will give a Random value between 0 and 1 in decimals
console.log(Math.random()*10); //As the value are between 0 to 1 hence we will get the next decimal as output 
console.log((Math.random()*10)+1); // This will help you not have the value as 0 in random numbers 

const min = 22;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1) + min)) //This helps you give random numbers between what you need like setting minimum and maximum values 

