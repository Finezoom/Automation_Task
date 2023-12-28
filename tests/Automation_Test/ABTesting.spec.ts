import { test, expect, Browser } from '@playwright/test';

test('A/B Testing', async ({ page }) => {
    const originalURL = 'https://practice.expandtesting.com/abtest';
    const modifiedURL = originalURL + '?abtest_off=true';
    await page.goto(modifiedURL);
    await page.close();

});