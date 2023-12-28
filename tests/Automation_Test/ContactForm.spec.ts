import { test, expect, Browser } from '@playwright/test';

test('Contact Form', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/contact#');
    await page.locator('[type*="text"]').nth(0).fill('Bala Surya');
    await page.locator('[type*="text"]').nth(1).fill('balasurya@gmail.com');
    await page.locator('[name="address"]').fill('Thank You');
    await Promise.all([
        page.click("//a[normalize-space()='Send']"),

    ]);
});