import { test, expect, Browser } from '@playwright/test';
test('Large & deep dom', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/large');
    const sibling = await page.locator('[class*="column-"]').allTextContents();
  
    // Extract text content of the table
    const valueToSearch = '50.51';
    const valueFound = await page.evaluate((value) => {
      const cell = [...document.querySelectorAll('[class*="column-"]')].find((el) => el.textContent?.trim() === value);
      return cell ? 'Value found' : 'Value not found';
    }, valueToSearch);
  
    console.log(valueFound)
  
  });