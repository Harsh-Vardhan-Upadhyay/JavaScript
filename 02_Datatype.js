"use strict" // this helps you treat all js codes as newer version 

let name = "Harsh" //this is a string 
let age = 20 // this is a integer 

//DATA TYPES

//"" is used to define a string


//null it is a standalone value 
//undefined 

// Difference between null and undefined
// null is a representation to define that it is empty 
// undefined means there is no value assigned

//symbol = unique

console.log(typeof age)
// this is used to know what kind of a datatype it is being used 



//Smymbol are unique even if they have same value 
const id = Symbol('1232')
const anotherId = Symbol('1232')

console.log(id)
console.log(anotherId);
console.log(id == anotherId)
//As you can see even though the values are same we still have this statement as false as when we use symbol they are unique


const bignumber = (948710948702935n);
console.log(typeof bignumber)

