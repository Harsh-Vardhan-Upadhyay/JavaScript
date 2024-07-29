const array = [1,2,4,6,3,5]// Array is a object 
console.log(array[0])

const hero = ["ironman","batman","superman"]
const array2 = new Array (1,2,3,4,5)
console.log(array2[3])


array.push(6)
console.log(array);// This is used to add values in a array 

array.pop()
console.log(array); // This is used to remove the last value in an array 

array.unshift(100)
console.log(array)// This is used to add at the start of the array but this can be very memory consuming when we have a very long array it will be very non opitmal to use this 

array.shift()
console.log(array) // This is used to remove the first element in an array

console.log(array.includes(8))// This helps us to check if the element exist in that array or not 

console.log(array.indexOf(6)) // This helps us to find the index of a element in that array it give -1 if that element does not exit in that aray 

const newarray = array.join()// This is used to convert the array type into string 
console.log(array)
console.log(newarray);
console.log(typeof(newarray));


// Slice, Splice 

console.log("A",array)
const myna = array.slice(1,3)// 

console.log(myna)
console.log("B",array)

const myna1 = array.splice(1,3)
console.log("C ", array)
console.log(myna1)

console.log(array);



// ********************Arrays part - 2********************

const heros = ["ironman","thor","spiderman","doctor strange"]
const dc = ["superman","flash","batman"]

// heros.push(dc)
// console.log(heros) // this is not a good method to join to strings 


const allHeros = heros.concat(dc)
console.log(allHeros) // This help you to combine 2 arrays by making a new array and storing those values of array in it 


const all_newheros = [...heros,...dc]
console.log(all_newheros) // This does the same thing as concat but is better as it can help merge more than 2 arrays 


const array6 = [1,2,3,[4,5],6,7,[8,[9,0]]]
const simplearray6 = array6.flat(Infinity)
console.log(simplearray6)// This is used to make a complex array in a simple array that is if a array is have more than one array in an array then you can make it a single array using flat 

console.log(Array.isArray("harsh"))
console.log(Array.from("harsh"))
console.log(Array.from({name : "harsh"})) // if it does not know what to make array of it will always print a empty array as an output

let score = 100;
let score1 = 200;
let score2 = 300;

console.log(Array.of(score,score1,score2))// This helps you convert individual values in a single array 

