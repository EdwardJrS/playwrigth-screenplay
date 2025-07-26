import { test, expect } from '@playwright/test';

test ('complete-purchase-just-first-field', async ({ page }) => {
  // User data
  const userData = {
    'username': 'standard_user',
    'userpassword': 'secret_sauce',
    'firstname': 'Edward',
  }

  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill(userData.username);
  await page.getByPlaceholder('Password').fill(userData.userpassword);
  await page.getByText('Login').click();

  // Select inventary
  const inventoryItems = await page.locator('//div[contains(@class,"inventory_item_description")]').all();
  
  // Select random item
  const randomIndex = Math.floor(Math.random() * inventoryItems.length);
  const getItemRandom = inventoryItems[randomIndex];
  
  await getItemRandom.getByText('Add to cart').click();
  
  // Open the shopping cart
  await page.locator('.shopping_cart_container').click();
  
  // Checkout
  await page.locator("//button[contains(text(),'Checkout')]").click();
  await page.getByPlaceholder('First Name').fill(userData.firstname);
  await page.getByText('Continue').click();
  await expect(page.locator("//h3")).toHaveText('Error: Last Name is required');

});