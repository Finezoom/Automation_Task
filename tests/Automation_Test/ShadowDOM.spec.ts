import { test, expect, Browser } from '@playwright/test';

test('Click Shadow DOM Button', async ({ page }) => {
  // Navigate to the page with the Shadow DOM button
  await page.goto('https://practice.expandtesting.com/shadowdom');
  await page.pause();
  const shadowDomButton = await page.locator('button:has-text("This button is inside a")');
  await shadowDomButton.click();
  const buttonText = await shadowDomButton.textContent();
  expect(buttonText).toContain('This button is inside a Shadow DOM.');
  console.log(buttonText);
  
});