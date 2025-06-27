// playwright/test automation: User Login
const { test, expect } = require('@playwright/test');

test('User Login with invalid credentials', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.click('text=Sign in');
  await expect(page).toHaveURL(/controller=my-account/);
  await page.fill('#email', 'invalid@example.com');
  await page.fill('#passwd', 'invalidpass');
  await page.click('#SubmitLogin');
  await expect(page.locator('.alert-danger')).toBeVisible();
});
