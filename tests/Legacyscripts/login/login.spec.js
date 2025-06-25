import { test, expect } from '@playwright/test';

const credentials = ["Admin", "admin123"]

const creds = {

    username: "Admin",
    password: "admin123"
}

let page;

test.beforeEach( async({browser})=>{

        page = await browser.newPage()

         await page.goto(`/web/index.php/auth/login`)
})

test.afterEach(async ()=>{

    await page.close()
})

test.describe("Verifying login functionality", async () => {

    test("Verify Login with Valid Credentials", async () => {

        test.slow() // Triple your test timeout for this Test case 

        // await page.locator("input[name='username8']").fill(process.env.ORG_USERNAME)

        // await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)

        await page.locator('input[class="oxd-input oxd-input--active"]').nth(0).fill("Admin")
        await page.locator('input[class="oxd-input oxd-input--active"]').nth(1).fill("admin123")

        await page.locator("button[type='submit']").click()

        //Assertion

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index") // 5sec 

    })


    test("Verify Login with valid username and Invalid password", async () => {

        test.fail()

        await page.locator("input[name='username']").fill(creds.username)

        await page.locator("input[type='password']").fill("kfhrnfk")

        await page.locator("button[type='submit']").click()

        //Assertion
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    })


    test("Verify Login with Invalid username and valid password", async () => {


        await page.locator("input[name='username']").fill("Admkfhrhin")

        await page.locator("input[type='password']").fill("admin123")

        await page.locator("button[type='submit']").click()

        //Assertion
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    })

    test("Verify Login with Invalid username and Invalid password", async () => {

        test.fixme()

        await page.locator("input[name='username']").fill("Admkfhrhin")

        await page.locator("input[type='password']").fill("admidkfvjn123")

        await page.locator("button[type='submit']").click()

        //Assertion
        await expect(page.locator("//p[text()='Invalid credentials raju']")).toBeVisible()
    })

})

