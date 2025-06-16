// class A{



//     m1(stuname, stuplace , stucourse){

// 	   this.studentName = stuname
//        this.studentPlace = stuplace
//        this.studentcourse = stucourse

// 	}

// 	m2(){

//       console.log(this.studentName, this.studentPlace, this.studentcourse)

// 	}
// }

// const a = new A()

// a.m1("Manoj", "blr", "Playwright")
// a.m2()

// Encapsulation 

// Binding the data between mehtods in a class

// one mehtod will setter method
// Another methos is getter method , this will get from setter method



// class A {


//     m1() {

//         console.log("This is M1 method")
//     }

//     m2() {

//         console.log("This is M2 method")
//     }

//     m3() {

//         console.log("This is M3 method")
//     }
// }


// class B extends A {


//     m4() {

//         console.log("This is M4 method")
//     }

//     m5() {

//         console.log("This is M5 method")
//     }

//     m6() {

//         console.log("This is M6 method")
//     }
// }


// class C extends B {


//     m7() {

//         console.log("This is M7 method")
//     }

//     m8() {

//         console.log("This is M8 method")
//     }

//     m9() {

//         console.log("This is M9 method")
//     }
// }
// const obj = new C()

// obj.m1() // from A class 

// obj.m5() // class B

// obj.m8() // class C

// PolyMorphism

//  Method Overriding 

//  method Overloading 

// class A{


//     displayMessage(){

//         console.log("This is method from Parent")
//     }

//     add(num1, num2){
    
//         console.log(num1)
//         console.log(num2)
//         console.log(num1+num2)

//     }
// }

// class B extends A{


//      displayMessage(){

//         console.log("This is method from Child")
//     }

//     add(num1, num2, num3){
    
//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1+num2+num3)

//     }
// }

// const obj = new A()

// obj.displayMessage() // Method Overriding 

// obj.add(2,4,5) // Method Overloading 

class A{

    x = 20

    y = 30

    displayMessage(){

        console.log("This is method from Parent")
    }

    add(num1, num2){
    
        console.log(num1)
        console.log(num2)
        console.log(num1+num2)

    }

}

A.prototype.z = 40  // Prototyped varibale 

A.prototype.substract= function(n1, n2){  // Prototyped Method 

       console.log(n1)
        console.log(n2)
        console.log(n1-n2)
}

const obj = new A()

const obj2 = new A()

console.log(obj.z)

console.log(obj2.z)

obj.substract(4,7)

obj2.substract(5,4)

//Abstraction  - not supported 
//Interface - Not supported 

// call back 

// promises 

// different mentods to work with promises 

// async and Await 