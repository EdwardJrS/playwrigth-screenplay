import { test, expect } from '@playwright/test';

test ('validate-total', async ({ page }) => {

  // User data
  const userData = {
    'username': 'standard_user',
    'userpassword': 'secret_sauce',
    'firstname': 'Edward',
    'lastname': 'Sierra',
    'zipcode': '080001',
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
  
  // validate product on shopping cart
  const expectedName = await getItemRandom.locator('.inventory_item_name').innerText();
  const itemPrice = await getItemRandom.locator('.inventory_item_price').innerText();

  // parse price to float.
  console.log(expectedName);
  console.log(itemPrice);
  
  const priceConverted = parseFloat(itemPrice.replace("$",""));
  console.log(priceConverted);

  // calc tax 8%
  const calculatedTax = priceConverted * 0.08;
  const totalToPay = priceConverted + calculatedTax;

  // Open the shopping cart
  await page.locator('.shopping_cart_container').click();
  
  // validate products on cart
  await expect(page.locator("//div[contains(@class,'inventory_item_name')]")).toHaveText(expectedName);
  
  await page.locator("//button[contains(text(),'Checkout')]").click();
  await page.getByPlaceholder('First Name').fill(userData.firstname);
  await page.getByPlaceholder('Last Name').fill(userData.lastname);
  await page.getByPlaceholder('Zip/Postal Code').fill(userData.zipcode);
  await page.getByText('Continue').click();


  // validate total
  await expect(page.locator("//div[contains(@class,'summary_total_label')]")).toHaveText(`Total: $${totalToPay.toFixed(2)}`);

});