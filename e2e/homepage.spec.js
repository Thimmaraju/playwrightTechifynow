const { expect, test } = require('@playwright/test');
const { HomePage } = require('../pageobjects/homepage.po');

test.describe('Homepage', () => {
  test('should load homepage and show key elements', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(home.logo).toBeVisible();
    await expect(home.searchBox).toBeVisible();
    await expect(home.cart).toBeVisible();
    await expect(home.menuWomen).toBeVisible();
    await expect(home.menuDresses).toBeVisible();
    await expect(home.menuTshirts).toBeVisible();
  });

  test('should navigate to login page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.signInLink.click();
    await expect(page).toHaveURL(/controller=my-account/);
    await expect(page.locator('form#login_form')).toBeVisible();
  });

  test('should navigate to contact us page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.contactUsLink.click();
    await expect(page).toHaveURL(/controller=contact/);
    await expect(page.locator('form#contact-form')).toBeVisible();
  });

  test('should subscribe to newsletter', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    const email = `test${Date.now()}@mail.com`;
    await home.subscribeNewsletter(email);
    await expect(page.locator('.alert-success, .alert')).toBeVisible();
  });
});
