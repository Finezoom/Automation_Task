import { test, expect, Browser } from '@playwright/test';

test('Exit Intent', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/exit-intent');
    await page.locator('html').dispatchEvent('mouseleave');
    await page.pause();
    await page.locator('[id="close-modal-btn"]').click();

});