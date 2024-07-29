let score = 33
console.log(typeof score);


//If you want to declare a interger then you can use Number (N in Number needs to be capital)
let declareNumber = Number(39)
console.log(typeof declareNumber)
console.log(declareNumber);


//Through this we can understand that Number is not totally reliable as we can se we have declared variable as number and the output is not a number(nan)
//because it has string in it and it is not converted into number
let nanTest = Number("45abc")
console.log(typeof nanTest);
console.log(nanTest);


//We can see when we define null as a number it print 0
let nullTest = Number(null)
console.log(typeof nullTest);
console.log(nullTest);

//we can see when we define undefined as number it will print nan again
let undefinedTest = Number(undefined)
console.log(typeof undefinedTest);
console.log(undefinedTest);

//we can see when we decleare boolean values it give output as needed i.e 0 and 1
let trueTest = Number(true)
console.log(typeof trueTest);
console.log(trueTest);

let falseTest = Number(false)
console.log(typeof falseTest);
console.log(falseTest);

console.log("This table is output of above tests")
console.table([declareNumber,nanTest,nullTest,undefinedTest,trueTest,falseTest])


// We learn that numbers are easy to convert 
//But when we declare string into it then it will give a output of NaN that is not a number 

//to convert number into boolean
let conbool = Boolean(1)
console.log(conbool);
console.log(typeof conbool);

let conbool1 = Boolean(0)
console.log(conbool1);
console.log(typeof conbool1);


//In the same way we can convert them into string
let stringTest = String(33)
console.log(stringTest);
console.log(typeof(stringTest));




// ********************  Operations  ********************

//converting number into negative value
let value = 33
let negValue = -value
console.log(negValue);

//Basic operations in js
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2**3); //will give the power of the number
console.log(2%2); //will give the reminder of the operation

//STING ADDITION
let str1 = "Harsh"
let str2 = " Vardhan"
console.log(str1+str2);


console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(3+4*10/2);



