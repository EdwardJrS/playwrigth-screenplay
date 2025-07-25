import { test, expect } from '@playwright/test';

test ('validate-selected-producs', async ({ page }) => {

  // User data
  const userData = ['standard_user','secret_sauce'];

  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill(userData[0]);
  await page.getByPlaceholder('Password').fill(userData[1]);
  await page.getByText('Login').click();

  // Select inventary
  const inventoryItems = await page.locator('//div[contains(@class,"inventory_item_description")]').all();
  
  // Select random item
  const randomIndex = Math.floor(Math.random() * inventoryItems.length);
  const getItemRandom = inventoryItems[randomIndex];
  
  await getItemRandom.getByText('Add to cart').click();
  
  // validate product on shopping cart
  const expectedName = await getItemRandom.locator('.inventory_item_name').innerText();
  console.log(expectedName);

  // Open the shopping cart
  await page.locator('.shopping_cart_container').click();
  
  // validate products on cart
  await expect(page.locator("//div[contains(@class,'inventory_item_name')]")).toHaveText(expectedName);

});