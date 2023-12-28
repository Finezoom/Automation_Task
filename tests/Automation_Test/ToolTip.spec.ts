import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/tooltips');
  await page.locator('[id="btn1"]').hover();
  console.log(await page.locator('[id="btn1"]').textContent());
  await page.locator('[id="btn2"]').hover();
  console.log(await page.locator('[id="btn2"]').textContent());
  const text = await page.locator('[id="btn3"]').isVisible();
  console.log(await page.locator('[id="btn3"]').textContent());
  await page.locator('[id="btn4"]').isVisible();
  console.log(await page.locator('[id="btn4"]').textContent());
  await page.locator('[id="btn5"]').isVisible();
  console.log(await page.locator('[id="btn5"]').textContent());

});