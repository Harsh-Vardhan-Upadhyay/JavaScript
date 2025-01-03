// singleton can only be constrcuted with constrain not when we declare it as a literals
const mysym = Symbol("key")


const jsUser = { name: "Harsh",
age: 20, email: "harsh@google.com",
loggedIn: false, [mysym]: "mykey1",
lastloginDays: ["Monday" , "Saturday"]
} 
// there are 2 ways to access a object 
console.log(jsUser.email)
console.log(jsUser["email"])


// To declare symbol
const mysym1 = Symbol("key")
// to declare it we need to use [] ie [mysym] : "mykey1"

// if we want to change the value of a object 
jsUser.email = "harsh@microsoft.com"

// we can freeze a object so that it does not change it values or we dont allow anyone to change the value
//Object.freeze(jsUser)
//jsUser.email = "harsh@apple.com"

console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())



const tinderuser = new Object()

tinderuser.id = "123"
tinderuser.name = "sam"
tinderuser.loggedin = false

console.log(tinderuser)

const regularuser = {
    email: "some@gmail.com",
    fullname:{
        firstname:"harsh",
        lastname:"upadhyay"
    }

}

console.log(regularuser.fullname)
console.log(regularuser.fullname.firstname)


// Extracts keys, values, and key-value pairs from the object 'tinderuser' and stores them in arrays.
console.log(Object.keys(tinderuser));   // Returns an array of all keys in the 'tinderuser' object
console.log(Object.values(tinderuser)); // Returns an array of all values in the 'tinderuser' object
console.log(Object.entries(tinderuser)); // Returns an array of [key, value] pairs from the 'tinderuser' object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


const obj3 = {obj1,obj2} // This is saving 2 objects inside of a object here 
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)
// we use {} so that we can use it as target to store obj1 and obj2 because if we dont use that all the values will be stored in obj1


const obj5 ={...obj1,...obj2}
console.log(obj5)
