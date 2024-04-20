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
