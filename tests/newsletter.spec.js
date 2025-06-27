// playwright/test automation: Newsletter Subscription
const { test, expect } = require('@playwright/test');

test('Newsletter Subscription', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.fill('input#newsletter-input', 'testnewsletter@example.com');
  await page.click('button[name="submitNewsletter"]');
  await expect(page.locator('.alert-success, .alert-danger')).toBeVisible();
});
