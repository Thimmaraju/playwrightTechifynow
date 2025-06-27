const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

    await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span/span')).toHaveText("Mobiles")

//      const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').textContent()

//      console.log(textvalue)

//    const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allTextContents()

// //   values = ["Kilos", "Mobiles", ""]

//     for(let i of values){
//         console.log(i)
//     }

    const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').innerText()

    console.log(textvalue)

    const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()

    for (let i of values) {
        console.log(i)
    }
})



test("Working with text - Orange HRM", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const username = await page.locator('p[class="oxd-text oxd-text--p"]').first().textContent()

    console.log(username)

    const usernamevalue  = username.split(" ")

    //await page.locator('input[name="username"]').fill(usernamevalue[2])
    //or 

    await page.fill('input[name="username"]', usernamevalue[2])

})

test("Working with text - redif", async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    
     await expect(page.locator('.cnt>h2')).toHaveText("Create a Rediffmail account")

    //  const textvalue = await page.locator('.cnt>h2').textContent()

    //  console.log(textvalue)

    const textvalue = await page.locator('.cnt>h2').innerText()

     console.log(textvalue)

    //  const textvalues = await page.locator('.form-group>label').allInnerTexts()

    const textvalues = await page.locator('.form-group>label').allTextContents()

    for (let value of textvalues) {
        console.log(value);
    }

})

test("Working with text - orangehrm - example 2", async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Fill in username and password
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    // Click the login button
    await page.click('button[type="submit"]');

    // Wait for dashboard to be visible
    await expect(page.locator('h6.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');

    //Get all menu items texts  
    const menuItems = await page.locator('.oxd-main-menu>li>a>span').allInnerTexts();

    for (let item of menuItems) {
        console.log(item);
    }

})