

x = 10

y =20

z = x/y 

console.log(z)

//+ - * / 

// % Modulus 


// 3/2  remainder - 1

// 4/2  remainder - 0 

// 7/3  - 1
// 8/3 - 2
// 9/3 0

console.log(8%3)

//7/4  - 3

console.log(7%4)

// ++ Increment by 1  

// -- Decrement by 1 

x = 34 

// x++  // x= x+1 

// x++

x-- // x = x-1
x-- 
console.log(x)

//Logical Operators 

// AND 
// OR 
// NOT 

// AND 

// x  y   result 

// 1  0    0
// 0  1    0
// 0  0    0
// 1  1    1

//&&

console.log((3>2) && (5<4))

//OR 

// x  y   result 

// 1  0    1
// 0  1    1
// 0  0    0
// 1  1    1

// ||

console.log((3>2) || (5<4))

// NOT  

// 1 0 
// 0 1

// ! 

console.log(!false)

//Comparision Operators 

// return true / false 

//value1 value2 

//= Equal is not comparision - Assignment 

//x = 20 

// ==

// ===

// >
// <
// >=
// <=

//==  vs ===

//Javascript will do the Type conversion 

x = 2 

y = "4"

z = x+y   // 2 + "4" // "2"+"4" // "24"

console.log(z)  // "24"

//Coersion in JS 

console.log("4"+2)  // "42"

console.log(2+4+3+"3"+3+5) // "9335"

//+  number convert to string 

//-, * , / , %  string is going to convert 

console.log( "4"-2)  

console.log("40"-23)

console.log("2"*4)



//== will compare only value of 2 operands it will not compare datatypes

console.log("45" == 45) //true

console.log("Raju" == "Raju") // true

//=== will compare value of 2 operands and also it will compare datatypes

console.log("45" === 45) // false 

console.log(6>8)  //false 

console.log(8>6) // true 

console.log(5>=5) // false 

// Assignment

// = 
// +=
// -=
// *=
// /+
// %= 


x = 6  // we are assigning 6 value to x 

x +=3  // x = x+3

console.log(x) //9

x*=3  // x= x*3  //27

console.log(x)

// ** 

//4^100
  //console.log(4*4*4*4*4*4*4*4*4*4*4*4*4*4*4*4*4*4*4*4)

  console.log(4**8)

  //conditional Operator / ternary operator 

  stu1 = "Manoj"
  stu2 = "Shaik"

//   condition  // true 

//   finalstu =stu1

//     condition  // false 

//   finalstu =stu2

//z = <condition> ? value1 : value2 


// finalstu =  "4"===4 ? stu1 : stu2

// console.log(finalstu)



