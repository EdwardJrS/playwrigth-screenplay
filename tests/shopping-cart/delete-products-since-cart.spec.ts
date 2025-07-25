import { test, expect } from '@playwright/test';

test ('detele-products-since-cart', async ({ page }) => {

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
  
  // Open the shopping cart
  await page.locator('.shopping_cart_container').click();

  // Delete the product
  await page.locator("//button[contains(text(),'Remove')]").click();
  await expect(page.locator('.delete-message')).toBeVisible();
});