
student = {

    firstname: "Krishna",
    lastname: "reddy",
    Place: "Hyd"
}

console.log(typeof (student.firstname)) //string

//Playwright

// 3 set of data 

// test(){


// }



// Objectname = {

//     property : "propertyvalue",

// }




student = {

    firstname: "Krishna",
    lastname: "reddy",
    Place: "Hyd"
}

console.log(typeof (student.firstname))

//2 ways 

//objectname.property

// objectname['property']

console.log(student.Place)

console.log(student['lastname'])

// Edit the property 

//objectname['property'] = "newvalue"

student['Place'] = "chennai"


console.log(student.Place)


student['age'] = "28" // Adding the properties 

console.log(student.age)

console.log(student.college) // 

//VehicleSelling 

vehicle = {

    vehicleprice: 22000
}

delivery = {

    fees: 450
}

delete delivery.fees

console.log(delivery.fees)


//totalamout = vehicleprice + deliveryfee


// total = vehicle.vehicleprice + delivery.fee
// console.log(total)


//console.log(45+undefined)  // NaN

// post 

personalinfo = {

  firstname : "Raju",
  lastname :   "G"

}

// Post ()
// {

//     delete personalinfo.firstname
// }

// 400 
// firstnamerequired


menuitems = {

    menu1: "Admin",
    menu2: "PIM",
    menu3: "Leave"
}

// await page.getBytext("Admin").toBeVisible()
//await page.getBytext("PIM").toBeVisible()
//await page.getBytext("Leave").toBeVisible()

for (let item in menuitems) {

    console.log("loop starts")

    console.log(menuitems[item])

    console.log("loop Ends ")
}

for (let menu in menuitems){

    // await page.getBytext(menuitems[item]).toBeVisible()

}

