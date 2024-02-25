const accountId = 1234
//const is used when we want to give permanent values to something which can not be changed or modified later 

let accountEmail = "hello@gmail.com"
var accountPassword = "032487"
// let and var are both same but var is no more used because it did not allow use of scope hence we use let 
// value in var and let can be modified 

accountCity = "Jaipur"



console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail = "harsh@gmail.com"
accountCity = "hyderabad"

console.table([accountId,accountEmail,accountPassword,accountCity])