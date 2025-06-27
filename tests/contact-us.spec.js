// playwright/test automation: Contact Us Form Submission
const { test, expect } = require('@playwright/test');

test('Contact Us Form Submission', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.click('text=Contact us');
  await expect(page).toHaveURL(/controller=contact/);
  await page.selectOption('#id_contact', '2'); // Customer service
  await page.fill('#email', 'testuser@example.com');
  await page.fill('#message', 'This is a test message.');
  await page.click('#submitMessage');
  await expect(page.locator('.alert-success')).toBeVisible();
});
