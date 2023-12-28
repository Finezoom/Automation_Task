import { test, expect } from '@playwright/test';

test('Entry AD', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Entry Ad' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'click here' }).click();
});