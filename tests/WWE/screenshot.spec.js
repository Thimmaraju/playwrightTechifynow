const { test, expect } = require('@playwright/test');

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')

    await page.waitForTimeout(3000)
    //await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    await page.screenshot({ path:`ests/screenshots/'+${formattedDate}+'HomePage.png'`})
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })

   // await page.locator("(//div[@class='_25HC_u'])[3]").screenshot({ path: 'tests/screenshots/' + Date.now() + 'element.png' })
});

test('Element screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.locator('img[src="https://rukminim2.flixcart.com/image/120/120/xif0q/ethnic-set/1/e/q/s-204kbd2167ia-skylee-original-imahd6wrdeytgz3y.jpeg?q=90"]').screenshot({ path: 'tests/screenshots/' + Date.now() + 'raju.png' })
});


test('Element screenshot Example 2 ', async ({ page }) => {

    console.log("Im taking screenshot")
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(3000)
    await page.locator('//img[@alt="company-branding"]/..').screenshot({ path: 'tests/screenshots/' + Date.now() + 'element.png' })
});