console.log(2>1)

//Comparision of different datatypes
console.log("2">1);
console.log("02">1);


//The reason for the solution is that == is a equality check and adding > is a comparison check so when we add <> signes 
//so when we do comparison null is convertd into zero that is why in the last one it converted to 0 and we get the value as true
console.log(null>0);
console.log(null==0);
console.log(null>=0);


//all the answers will remain same as undefined has no defined values 
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


//here the second one is wrong cause in the first one they datatype is converted from string to int but in the second one it is not 
console.log("2"==2);
console.log("2"===2);