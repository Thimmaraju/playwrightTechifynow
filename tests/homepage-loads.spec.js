// playwright/test automation: Homepage Loads Successfully
const { test, expect } = require('@playwright/test');

test('Homepage Loads Successfully', async ({ page}) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await expect(page).toHaveTitle(/My Shop/i);
  await expect(page.locator('text=WOMEN')).toBeVisible();
  await expect(page.locator('text=Sign in')).toBeVisible();

  
});
