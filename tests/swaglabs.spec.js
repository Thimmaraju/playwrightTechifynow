import { test, expect } from '@playwright/test';

test('Verify Swag Labs Login', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("//input[@data-test='username']").fill("standard_user")
    await page.locator("//input[@data-test='password']").fill("secret_sauce")
    await page.locator("//input[@type='submit']").click()

    //assertions
    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


})


test('Verify Swag Labs Login - Valid username and Invalid Password  ', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.locator("//input[@data-test='username']").fill("standard_user")
    await page.locator("//input[@data-test='password']").fill("raju")
    await page.locator("//input[@type='submit']").click()

    //assertions
    await expect(page.locator("//h3[@data-test='error']")).toBeVisible()


})