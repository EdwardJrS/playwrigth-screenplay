import { test, expect } from '@playwright/test';

test ('login-with-empty-fields', async ({ page }) => {
  
  // open website
  await page.goto('https://www.saucedemo.com/');

  // login and validate message error
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByText('Login').click();
  await expect(page.locator('//div[contains(@class,\'error-message-container\')]')).toHaveText('Epic sadface: Password is required');

  //page.pause();

});