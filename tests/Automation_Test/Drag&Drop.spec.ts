import { test, expect, Browser } from '@playwright/test';
test('Drag and Drop', async ({ page, browser }) => {
    await page.goto('https://practice.expandtesting.com/horizontal-slider');
    const sliderHandle = await page.locator('[type="range"]');
    const sliderBound = await sliderHandle.boundingBox();
    if (sliderBound) {
      const targetX = sliderBound.x + sliderBound.width / 2;
      const targetY = sliderBound.y + sliderBound.height / 2;
      await page.mouse.move(targetX, targetY);
      await page.mouse.down();
      await page.mouse.move(targetX + 30, targetY);
      await page.mouse.up();
      await page.waitForTimeout(3000);
      const value = await page.locator('[id="range"]').textContent();
      console.log('Slider Value : ' + value)
    }
  });