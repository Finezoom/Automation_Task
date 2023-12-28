import { test } from '@playwright/test';

test('Click Event', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/google-tracking-events#');
  await page.click("//a[@id='click-event-link']");
  console.log(await page.locator("(//div[@id='flash-message'])[2]").innerText());

});

test('Submit Event', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/google-tracking-events#');
  await page.locator('[type="email"]').fill('balasurya1999@gmail.com');
  await page.locator('[class="form-control"]').nth(1).fill('Thank You');
  await page.locator("button[type='submit']").click();
  console.log(await page.locator("(//div[@id='flash-message'])[2]").innerText());

});