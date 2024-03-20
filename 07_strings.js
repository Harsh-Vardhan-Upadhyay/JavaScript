 const name = 'harsh'
 const repoCount = 50
 
 console.log(name + repoCount)

//Modern way of using this samething which makes your code more easy to understand 
console.log(`My Name is ${name} and my github reposiotory count is ${repoCount}`)


//Another way to declare a string
const gameName = new String('harsh')

console.log(gameName[2]);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length) // this is the syntax used to check the length of the string
console.log(gameName.toUpperCase) // this is used to change the characters to upper case values without changing the original strings values as stack memory is used in here for string cause it is primitive
