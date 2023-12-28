import { test } from '@playwright/test';

test('Element on page that is hidden', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dynamic-loading');
    await page.locator("//a[contains(text(),'Example 1: Element on page that is')]").click();
    await page.getByRole('button', { name: 'Start' }).click();
    console.log(await page.locator("div[id='finish'] h4").textContent());

});

test('Element rendered after the fact', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-loading');
    await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();
    await page.getByRole('button', { name: 'Start' }).click();
    const selector = 'h4';
    await page.waitForSelector(selector);
    const text = await page.textContent(selector);
    console.log(text);

});