import { test, expect } from '@playwright/test';

test('Context Menu', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/context-menu');
    page.on("dialog", (dialog) => {
        console.log('Message :', dialog.message());
        console.log('Type :', dialog.type());
        dialog.accept();
    })
    await page.click("//div[@id='hot-spot']", { button: 'right' });
});