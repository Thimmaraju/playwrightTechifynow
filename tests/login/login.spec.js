import { test, expect } from '@playwright/test';


test("Verify Login with Valid Credentials", async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME)

    await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD)

    await page.locator("button[type='submit']").click()

    //Assertion

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index") // 5sec 

})


test("Verify Login with valid username and Invalid password", async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[type='password']").fill("kfhrnfk")

    await page.locator("button[type='submit']").click()

    //Assertion
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})


test("Verify Login with Invalid username and valid password", async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admkfhrhin")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    //Assertion
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("Verify Login with Invalid username and Invalid password", async ({ page }) => {

    await page.goto("/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admkfhrhin")

    await page.locator("input[type='password']").fill("admidkfvjn123")

    await page.locator("button[type='submit']").click()

    //Assertion
    await expect(page.locator("//p[text()='Invalid credentials raju']")).toBeVisible()
})