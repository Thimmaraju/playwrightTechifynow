
// var x = 12 // number 
// string , boolean , undefined, null 

//Objects 

//arrays 

// Java 

// Input = {2,3,4,5,6,7}

// Java       - telugu
// JavaScript  - German

//arrayname = [element1 , element2]


arr = [] // Empty Array

arr1 = [5, 6, 2, 3, 4] // Homogenious - Array -  all elements similar datatypes 

arr2 = ["raju", "manoj", "uday", "yasin", "nivedika "] // Homogenious - Array -  all elements similar datatypes 

arr3 = ["raju", 32, true, undefined, null] // Hetirogenous 

//length

console.log(arr2.length) //5

arr4 = arr1.sort()

console.log(arr4)

//["raju", "manoj", "uday", "yasin" , "nivedika "]

//arrname[index]

//always starts 0

console.log(arr2[2])  // Access the elements using index 

arr5 = arr2.concat(arr3)

console.log(arr5)

// str1 = "Raju"
// str2 = "G"

// str3 = str1.concat(str2)

// console.log(str3)

// reverse()

arr6 = ['raju', 'manoj',
    'uday', 'yasin',
    'nivedika ', 'raju',
    32, true,]

    arr7 = arr6.reverse()

    console.log(arr7)

    arr8 = ['raju', 'manoj',
    'uday', 'yasin']   //"raju manoj uday yasin"

    str1 = arr8.join("") // convert array to string 

    console.log(str1)

    str2 = "Javascript class"

    arr9 = str2.split(" ")  // ["j", "a"]

    console.log(arr9)

    // convert string to array 

    str = "javascript"

    revstr = str.split(" ").reverse().join("") 

    console.log(revstr)
