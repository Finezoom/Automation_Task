import { test, expect, Browser } from '@playwright/test';
test('Check Box', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.locator('[id="checkbox1"]').click();
    await page.pause();
    await page.locator('[id="checkbox2"]').click();
  
  });