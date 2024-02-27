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
