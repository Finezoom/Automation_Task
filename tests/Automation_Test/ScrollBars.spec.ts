import { test, expect, Browser } from '@playwright/test';
test('Scroll Bar', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/scrollbars');
    await page.locator("//button[@id='hidingButton']").scrollIntoViewIfNeeded();
    const text = await page.locator("//button[@id='hidingButton']").innerText();
    console.log('Text : ' + text)
    
  });