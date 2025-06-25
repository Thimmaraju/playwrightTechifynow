
import { test, expect } from '@playwright/test';


test.beforeAll(() => {

    console.log("Beofere All")

})

test.afterAll(() => {

    console.log("After All")

})


test.beforeEach(() => {

    console.log("Test Execution started")

})

test.afterEach(() => {

    console.log("Test Execution completed")

})



test.describe("Suite1 name", async () => {


    test("test1", async () => {


        //10 lines
        console.log("This is test 1 Block")
        //5 lines

    })

    test("test2", async () => {

        console.log("This is test 2 Block")

    })

    test("test3", async () => {

        console.log("This is test 3 Block")

    })

    test("test4", async () => {

        console.log("This is test 4 Block")

    })


})


// test.describe("Suite 2 ", async () => {


//     test("test3", async () => {

//         console.log("This is test 3 Block")

//     })

//     test("test4", async () => {

//         console.log("This is test 4 Block")

//     })

// })

