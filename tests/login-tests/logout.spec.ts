import { test } from '@playwright/test'

test ('login', async({ page }) => {

  // data to testing
  const userData = ['standard_user', 'secret_sauce'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // logout
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  page.pause();

});