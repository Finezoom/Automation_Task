import { test, expect, Browser } from '@playwright/test';
test('Http', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/http-headers');
    const text = await page.locator('[class="table-responsive"]').innerText();
    console.log(text);
  
  });