const { browser, test, expect } = require('@playwright/test');

test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes', async ({ page }) => {

        await page.goto('https://jqueryui.com/checkboxradio/')
        const checkbox = await page.frameLocator('iframe[class="demo-frame"]').locator('label[for="checkbox-1"]').click()

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })


    test('Working with console data', async ({ page }) => {

        let firstConsoleMessage;

        // Capture only the first console message
        page.once('console', msg => {
            firstConsoleMessage = msg.text();
            console.log(`Captured First Message: ${firstConsoleMessage}`);
        });
        await page.goto('https://demoqa.com/')

        console.log('Saved message:', firstConsoleMessage);

    })


})