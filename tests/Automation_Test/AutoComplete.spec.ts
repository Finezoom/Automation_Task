import { test, expect, Browser } from '@playwright/test';

test('Auto Complete', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/autocomplete');
  await page.locator('[id="country"]').fill('Ind');
  await page.getByText('India').hover();
  await page.getByText('India').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  const text = await page.locator("(//p[@id='result'])[1]").allTextContents();
  console.log('Text : ' + text)
  await page.pause();

});