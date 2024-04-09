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