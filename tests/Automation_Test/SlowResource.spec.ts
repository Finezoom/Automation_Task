import { test, expect, Browser } from '@playwright/test';

test('Slow Resources', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/slow");
    await page.waitForTimeout(20000);
    const resultText = await page.textContent('[id="result"]');
    expect(resultText).toContain('The slow task has finished. Thanks for waiting!');
    console.log(resultText);
});