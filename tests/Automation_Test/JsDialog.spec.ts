import { test, expect, Browser } from '@playwright/test';
test('Js Alert', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[onclick="jsAlert()"]');
    page.on("dialog", (dialog) => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept();

    })
    await ele.click();
});
test('Js Confirm', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[id="js-confirm"]');
    page.on("dialog", (dialog) => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept();

    })
    await ele.click();
});
test('Js Prompt', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[id="js-prompt"]');
    
    page.on("dialog", async dialog => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept('Surya');
    })
    await ele.click();
    
});