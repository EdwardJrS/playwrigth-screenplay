import { test, expect } from '@playwright/test';

test ('login-unkown-user', async ({ page }) => {

  // user data
  const userData = ['locked_out_user', 'secret_sauce'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // validate error message
  await expect(page.locator('//div[contains(@class,\'error-message-container\')]')).toHaveText('Epic sadface: This user is locked out');

  //await page.pause();
});