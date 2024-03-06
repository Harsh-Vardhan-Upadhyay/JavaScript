// There are two types of memory Stach and Heap

// Stack memory is used when we have pirmitive datatype 
// Heap memory is used when we have non primitive datatype

let myname = ("Harsh Upadhyay")
let newName = (myname)
newName = ("Harsh Vardhan Upadhyay")

console.log(myname)
console.log(newName)

// By this we understand that when we change a value in this order the real does not change a copy of it made in another stack and then it is saved there



let user = 
{
   Name: "Harsh",
   regno: "RA2111033010031"
   
}

let userTwo = user
userTwo.Name = "Harsh Vardhan"

console.log(user.Name)
console.log(userTwo.Name)