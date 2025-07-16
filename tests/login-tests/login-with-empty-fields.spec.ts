import { test, expect } from '@playwright/test';

test ('login-with-empty-fields', async ({ page }) => {
  
  // open website
  await page.goto('https://www.saucedemo.com/');

  // validate message error
  await page.getByText('Login').click();
  await expect(page.locator('//div[contains(@class,\'error-message-container\')]')).toHaveText('Epic sadface: All fields are required');

  //page.pause();

});