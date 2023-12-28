import { test, expect, Browser } from '@playwright/test';

test('Broken img', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/broken-images');
    await page.waitForLoadState("domcontentloaded");
    const images = page.locator("img");
    console.log(await images.count());
    const allimage = await images.all();
    for await (const img of allimage) {
      const imgsrc = await img.getAttribute("src");
      console.log('Broken Image : ' + imgsrc);
    }
  });
  