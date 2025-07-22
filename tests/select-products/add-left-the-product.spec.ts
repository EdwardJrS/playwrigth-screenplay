import { test } from '@playwright/test';

test ('add-left-the-product', async ({ page }) => {
  
  // data to testing
  const userData = ['standard_user', 'secret_sauce'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // select product
  await page.getByText('Add to cart').nth(1).click();
  
  // remove product
  await page.getByText('Remove').click();

});