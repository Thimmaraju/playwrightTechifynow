const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.logo = page.locator('#header_logo');
    this.searchBox = page.locator('input[name="search_query"]');
    this.cart = page.locator('.shopping_cart');
    this.menuWomen = page.locator('a[title="Women"]');
    this.menuDresses = page.locator('a[title="Dresses"]');
    this.menuTshirts = page.locator('a[title="T-shirts"]');
    this.newsletterInput = page.locator('#newsletter-input');
    this.newsletterBtn = page.locator('button[name="submitNewsletter"]');
    this.signInLink = page.locator('a.login');
    this.contactUsLink = page.locator('a[title="Contact Us"]');
  }

  async goto() {
    await this.page.goto('http://www.automationpractice.pl/index.php');
  }

  async subscribeNewsletter(email) {
    await this.newsletterInput.fill(email);
    await this.newsletterBtn.click();
  }
};
