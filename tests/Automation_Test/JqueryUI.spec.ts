import { test, expect } from '@playwright/test';

test('JqueryUI', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/jqueryui');
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Downloads' }).hover();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'PDF' }).click();
    const download = await downloadPromise;
});

test('JqueryUI Menu', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/jqueryui');
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Back to JQuery UI' }).click();
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Downloads' }).hover();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'CSV' }).click();
    const download = await downloadPromise;
});