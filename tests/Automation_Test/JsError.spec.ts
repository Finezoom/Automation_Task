import { test, expect, Browser } from '@playwright/test';

test('Js Error', async ({ page }) => {
    page.on('pageerror', (error) => {
        console.error('Page error occurred :', error);
      });
    await page.goto('https://practice.expandtesting.com/javascript-error');
    await page.close();
    
});