import { test, expect, Browser } from '@playwright/test';
test('Dynamic Control', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-controls?');
    await page.locator("//input[@type='checkbox']").click();

    await page.getByRole('button', { name: 'Remove' }).click();
    console.log('Remove Icon : ', await page.locator("//p[@id='message']").innerText());

    await page.getByRole('button', { name: 'Add' }).click();
    console.log('Add Icon : ', await page.locator("//p[@id='message']").innerText());

    await page.getByRole('button', { name: 'Enable' }).click();
    console.log('Enable Icon : ', await page.locator('[id*="m"]').nth(4).innerText());

    await page.getByRole('button', { name: 'Disable' }).click();
    console.log('Disable Icon : ', await page.locator('[id*="m"]').nth(4).innerText());

});