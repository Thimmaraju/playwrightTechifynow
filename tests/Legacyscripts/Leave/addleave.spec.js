const { test, expect } = require('@playwright/test');


test.describe(" Group name / Test suite name ", async () => {

    test("Test case title", async ({ page }) => {

        await page.goto("Url here")
    })

    test("Test case title 2", async ({ page }) => {

        await page.goto("Url here")
    })


    test("Test case title3", async ({ page }) => {

        await page.goto("Url here")
    })


    test("Test case title 4", async ({ page }) => {

        await page.goto("Url here")
    })


})


test.describe("Suite 2 ", async ()=>{

   test("Test case title 5", async ({ page }) => {

        await page.goto("Url here")
    })

    test("Test case title 6", async ({ page }) => {

        await page.goto("Url here")
    })

    test("Test case title 7", async ({ page }) => {

        await page.goto("Url here")
    })

    test("Test case title 8", async ({ page }) => {

        await page.goto("Url here")
    })

    test("Test case title 9", async ({ page }) => {

        await page.goto("Url here")
    })


})
