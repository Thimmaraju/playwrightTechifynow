// playwright/test automation: Add Product to Cart
const { test, expect } = require('@playwright/test');

test('Add Product to Cart', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php');
  await page.fill('input[name="search_query"]', 'dress');
  await page.press('input[name="search_query"]', 'Enter');
  await expect(page.locator('.product_list')).toBeVisible();
  // Click on first product's "Add to cart" button
  await page.hover('.product_list .product-container');
  await page.click('.product_list .ajax_add_to_cart_button');
  await expect(page.locator('.layer_cart_product h2')).toContainText('Product successfully added');
});
