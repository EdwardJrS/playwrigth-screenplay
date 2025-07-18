import { test, expect } from '@playwright/test';

test ('login-unkown-user', async ({ page }) => {

  // user data
  const userData = ['Edward', '123456'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // validate error message
  await expect(page.locator('//div[contains(@class,\'error-message-container\')]')).toHaveText('Epic sadface: Username and password do not match any user in this service');

  //await page.pause();
});