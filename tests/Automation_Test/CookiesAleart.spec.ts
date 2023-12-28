import { test, expect, Browser } from '@playwright/test';
test('Cookie Alert', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/cookie-alert');
  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'I Accept' }).click();
  await page.pause();

});