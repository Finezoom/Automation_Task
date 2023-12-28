import { test, expect, Browser } from '@playwright/test';

test('Multiple_Window', async ({ page, context }) => {
    await page.goto("https://practice.expandtesting.com/windows");
    await page.locator('text="Click Here"').click();
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());

});