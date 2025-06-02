import { test, expect } from '@playwright/test';

test('Verify Add Employee With Mandatory Details', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username3']").fill("Admin")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    //Assertion

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


    await page.locator("(//a[@class='oxd-main-menu-item'])[2]").click()

    await page.locator("//a[normalize-space(text())='Add Employee']").click()

    await page.locator("//input[@placeholder='First Name']").fill("Krishna")
    
    await page.locator("//input[@placeholder='Last Name']").fill("Reddy")

    await page.locator("//button[@type='submit']").click()



  
});
