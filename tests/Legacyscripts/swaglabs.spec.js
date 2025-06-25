import { test, expect } from '@playwright/test';

test('Verify Swag Labs Login', async ({ page }) => {


    const creds = ["standard_user", "secret_sauce"]
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("//input[@data-test='username']").fill(creds[0])
    await page.locator("//input[@data-test='password']").fill(creds[1])
    await page.locator("input[type='submit']").click()

    //assertions
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


})


test('Verify Swag Labs Login - Valid username and Invalid Password ',{tag: "@smoke"}, async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("//input[@data-test='username']").fill("standard_user")
    await page.locator("//input[@data-test='password']").fill("raju")
    await page.locator("//input[@type='submit']").click()

    //assertions
    await expect(page.locator("//h3[@data-test='error']")).toBeVisible()


})