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
console.log(gameName.toUpperCase()) // this is used to change the characters to upper case values without changing the original strings values as stack memory is used in here for string cause it is primitive
console.log(gameName.charAt(2)); // this is used to check what is the charactor present at that index
console.log(gameName.indexOf('h')); // this is used to check at what index that charactor is present at 
const newString = gameName.substring(0,4) // this is used to break the string into substrings if you want first 3 charactors to to divided into the substring then enter 4 for end as it does not include the end value 
console.log(newString);



// Trim is used to remove unwanted space that is created by the user 
const newone = "   harsh   "
console.log(newone)
console.log(newone.trim())
console.log(newone.trimStart())
console.log(newone.trimEnd()) 

// replace is used to replace a charactor or word with some other charactor replaceall is used to replace all the replaceable charactors in the string
const  url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"
console.log(url.replace('=','9'))
console.log(url.replaceAll('=','9'))

console.log(url.includes('www')) // this include is used to check if the charactor excits in the string or not

