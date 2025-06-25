import { test, expect } from '@playwright/test';

test('Verify Launch Flipkart', async ({ page }) => {

    await page.goto(process.env.URL_FLIPKART)

})