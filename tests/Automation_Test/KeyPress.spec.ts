import { test, expect, Browser } from '@playwright/test';
test('KeyPress', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/key-presses');
    await page.pause();
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('Backspace');
    await page.screenshot({ path: 'Backspace.png' });
  
  });