import { test, expect, Browser } from '@playwright/test';
test('infinite scroll', async ({ page }) => {

  await page.goto('https://practice.expandtesting.com/infinite-scroll');
  async function scrollToEnd() {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });
    await page.waitForTimeout(1000);
  }

  const maxScrolls: number = 20;
  for (let i: number = 0; i < maxScrolls; i++) {
    await scrollToEnd();
    console.log(`Scrolled ${i + 1} times`);
  }
});