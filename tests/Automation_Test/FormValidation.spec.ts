import { test, expect, Browser } from '@playwright/test';

test('form validation', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/form-validation');
  await page.locator("[name='ContactName']").fill('surya');
  await page.locator("[name='contactnumber']").fill('123-4567890');
  await page.locator("[name='pickupdate']").fill('1999-12-28');
  await page.locator("[class='form-select']").selectOption('cash on delivery');

  // Submit the form
  await page.click('button[type="submit"]');

  // print
  const form = await page.locator('[role*="a"]').allTextContents();
  console.log(form);

});