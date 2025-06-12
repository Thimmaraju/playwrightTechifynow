// const { copyFileSync } = require("node:fs")

// var x = 30 

// // int , float , double datatypes not there in JS 

// str = Number("34")

// num = String(34)

// num = 4- "Raju" // NaN not a numbder 

// console.log(num)

// num2 =5 +undefined // NaN

// console.log(num2)

// ///isNaN()  true / false 

// console.log(isNaN(num2)) //true

// //integer // parseInt()

// //parseFloat()

// num3 = 68758967598476895469851n
// num4 = 4n

// //68758967598476895469855

// ///any number above 2^53 
// // BigINt 

// num5 = num3 +num4

// console.log(num5)

// //Math functions Numbers



// max = Math.max(96,34,54,76,54,67,89)

// console.log(max)

// min = Math.min(96,34,54,76,54,67,89)

// console.log(min)

// const moment = require('moment');

// let now = moment().format('LLLL');

// console.log(now)

// let day = moment().format('dddd');

// console.log(day)

// sum.js

// Get input from terminal
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask first number
rl.question('Enter the first number: ', (firstInput) => {
  // Ask second number
  rl.question('Enter the second number: ', (secondInput) => {
    // Convert to numbers and calculate sum
    const num1 = parseFloat(firstInput);
    const num2 = parseFloat(secondInput);
    const sum = num1 + num2;

    console.log(`The sum is: ${sum}`);

    rl.close();
  });
});