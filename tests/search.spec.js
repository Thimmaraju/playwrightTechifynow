// playwright/test automation: Search for a Product
const { test, expect } = require('@playwright/test');

test('Search for a Product', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.fill('input[name="search_query"]', 'dress');
  await page.press('input[name="search_query"]', 'Enter');
  await expect(page).toHaveURL(/search_query=dress/);
  await expect(page.locator('.product_list')).toBeVisible();
});
