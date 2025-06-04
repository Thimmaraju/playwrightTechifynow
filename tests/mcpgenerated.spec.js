import { test, expect } from '@playwright/test';

test('Admin can create a new user in OrangeHRM', async ({ page }) => {
  // 1. Launch the URL
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // 2. Login as admin
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3. Click on Admin menu
  await page.getByRole('menuitem', { name: 'Admin' }).click();

  // 4. Click on Add button in User Management
  await page.getByRole('button', { name: 'Add' }).click();

  // 5. Fill all user creation details
  await page.getByLabel('User Role').click();
  await page.getByRole('option', { name: 'ESS' }).click();

  await page.getByLabel('Employee Name').fill('Linda Anderson');
  await page.getByLabel('Status').click();
  await page.getByRole('option', { name: 'Enabled' }).click();

  // Use a unique username for each run
  const username = `testuser_${Date.now()}`;
  await page.getByLabel('Username').fill(username);

  await page.getByLabel('Password').fill('Password@123');
  await page.getByLabel('Confirm Password').fill('Password@123');

  // 6. Click on Save button
  await page.getByRole('button', { name: 'Save' }).click();

  // 7. Verify user is created (search for the username)
  await page.getByLabel('Username').fill(username);
  await page.getByRole('button', { name: 'Search' }).click();

  // Assert the user appears in the results
  await expect(page.getByRole('cell', { name: username })).toBeVisible();
});