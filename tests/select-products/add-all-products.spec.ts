import { test } from '@playwright/test';

test ('add-all-products', async ({ page }) => {
  
  // data to testing
  const userData = ['standard_user', 'secret_sauce'];

  // open website
  await page.goto('https://www.saucedemo.com/');

  // login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // Select contaioners product
  const inventoryItems = await page.locator('//div[contains(@class,"inventory_item_description")]').all();

  // Select random item  
  for (let i = 0; i < inventoryItems.length; i++) {;
    const getItem = inventoryItems[i];
    await getItem.getByText('Add to cart').click();
  }

});