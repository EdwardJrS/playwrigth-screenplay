import { test } from '@playwright/test';

test ('add-some-products', async ({ page }) => {
  
  // data to testing
  const userData = ['standard_user', 'secret_sauce'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // find random product (6 = number of products)
  const randomIndex = Math.floor(Math.random() * 6);

  // select products
  await page.locator(`(//button[contains(text(), "Add to cart")])[${randomIndex}]`).click();
  await page.locator(`(//button[contains(text(), "Add to cart")])[${randomIndex}]`).click();

});