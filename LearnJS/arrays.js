
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

    //length - How many element s 

    // split("") - converts string to array 
    //join("") - converts array to string 

    // concat  - joining two arrays 
    //sort() - sort the elements in acendoing order 
    //reverse() - reverse the arrays elements 

    //arr[index] - to access to elements based on its index 

  // push - will add elements at end of the array 

  //unshift() will add the elements at the beginning of the array 

    arr = ["eat", "sleep"]

    arr.push("Wake up")

     arr.push("Exersize")

    arr.unshift("Raju")

    console.log(arr)

    //pop - will remove the last element of the array 
    //shift - will first element of the array 


arr2 = [ 'Raju', 'eat', 'sleep', 'Wake up', 'Exersize' ]

arr2.pop()
arr2.pop()

arr2.shift()
arr2.shift()

console.log(arr2)

//indexOf()

arr3 = [ 'Raju', 'eat', 'sleep', 'Wake up', 'Exersize' ]

x = arr3.indexOf("sleep")

console.log(x)

arr3[2] = "Run"

console.log(arr3)

//includes 

console.log(arr3.includes("sleep"))  // true 



arr4 = [ 'Raju', 'eat', 'sleep', 'Wake up', 'Exersize' ]

arr4.forEach(element => {

    console.log("loops begin")

    console.log(element)
    
     console.log("loops ends")
});



let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2); // Remove 2 items starting from index 1
console.log(fruits); // ['apple', 'date']

let colors = ['red', 'blue'];
colors.splice(1, 0, 'green', "navy blue"); // Add 'green' at index 1
console.log(colors); // ['red', 'green', 'blue']



// map 
// filter 
// reduce


let fruits2 = ['apple', 'banana', 'cherry', 'date'];
 
//fruits2.sort().reverse() // decending 


for( let element of fruits2 ){

      console.log("loops begin")
    console.log(element)
      console.log("loops ends")
}