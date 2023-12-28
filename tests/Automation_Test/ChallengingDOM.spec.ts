import { test, expect, Browser } from '@playwright/test';

test('Challenging DOM', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/challenging-dom');
  await page.locator('[class*="btn btn-primary"]').nth(0).click();
  const text = await page.locator('[id*="c"]').nth(3).allInnerTexts();
  console.log('Text Content:', text);

});