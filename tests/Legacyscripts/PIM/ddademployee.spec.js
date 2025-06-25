import { test, expect } from '@playwright/test';

const empfirstnames = {
    emp1 : "Manoj",
    emp2 : "Phani",
    emp3 : "Arun",
    emp4 : "Harish",
}
for(let emp in empfirstnames) {
test(`Add employe to OrangeHRM - ${empfirstnames[emp]}`, async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@type='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//a[@class='oxd-main-menu-item active']")).toBeVisible();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await page.locator("//input[@placeholder='First Name']").fill(empfirstnames[emp]);
    await page.locator("//input[@placeholder='Last Name']").fill('Sunkara');
    await page.locator("//button[@type='submit']").click();
});

}