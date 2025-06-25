import { expect } from '@playwright/test';

exports.AdminPage =  class AdminPage {


  constructor(page) {
    this.page = page;
  }

  async navigateToJobTitles() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
    await this.page.getByText('Job').click();
    await this.page.getByRole('menuitem', { name: 'Job Titles' }).click();
  }

  async addJobTitle(titlePrefix) {
    const randomText = (Math.random() + 1).toString(36).substring(7);
    const finalTitle = `${titlePrefix}${randomText}`;

    await this.page.getByRole('button', { name: ' Add' }).click();
    await this.page.getByRole('textbox').nth(1).fill(finalTitle);
    await this.page.getByRole('button', { name: 'Save' }).click();

    await expect(this.page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
   
  }
}
