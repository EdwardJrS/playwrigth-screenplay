import { test } from '@playwright/test';

test ('select-product', async ({ page }) => {
  
  const userData = ['standard_user','secret_sauce'];

  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // Select contaioners product
  const inventoryItems = await page.locator('//div[contains(@class,"inventory_item_description")]').all();

  // Select random item
  const randomIndex = Math.floor(Math.random() * inventoryItems.length);
  const getItemRandom = inventoryItems[randomIndex];

  await getItemRandom.getByText('Add to cart').click();

  // Print item data
  //const expectedName =  await getItemRandom.locator('.inventory_item_name').innerText();
  //const expectedPrice =  await getItemRandom.locator('.inventory_item_price').innerText();
  //console.log(expectedName);
  //console.log(expectedPrice);

  // await page.pause();

});