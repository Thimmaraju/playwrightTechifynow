import { test, expect } from '@playwright/test';

test('Verify Add job title functionality', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByText('Job').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();

  let randomText = (Math.random() + 1).toString(36).substring(7);// generate random text 5 characters
  console.log(randomText); // Log the random text to the console
  await page.getByRole('textbox').nth(1).fill('CEO '+ randomText);
  await page.getByRole('button', { name: 'Save' }).click(); // 30 sec 

  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible(); // timeout - 30000
});