class Employee {

    x = 20

    static y = 30

    m1() {

        console.log("This is method 1")

        console.log(this.x)
    }

   static  m2() {

        console.log("This is method 2")
    }

   static  m3() {

        console.log("This is method 3")

     
    }

    m4() {

        this.m1()

        console.log("This is method 4")
    
    }

}


console.log(Employee.y)

Employee.m3()

// const emp1 = new Employee()

// emp1.m4()

// emp1.m3()  // this is invalid 



// const emp2 = new Employee()

// emp2.m4()


