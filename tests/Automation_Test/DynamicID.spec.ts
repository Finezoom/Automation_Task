import { test } from '@playwright/test';

test('Dynamic ID', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-id');
    const buttonLocator = await page.locator('button:has-text("Button with Dynamic ID")');
    await buttonLocator.click();

    await page.waitForSelector('button:visible');
    const isButtonClicked = await buttonLocator.isVisible();
    if (isButtonClicked) {
        console.log('Button was clicked successfully using the new selector.');
      } else {
        console.error('Button was not clicked or not found with the new selector.');
      }
});