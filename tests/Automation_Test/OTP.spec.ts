import { test, expect, Browser } from '@playwright/test';

test('OTP Login', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/otp-login');
    await page.locator('[id="email"]').fill('practice@expandtesting.com');
    await page.locator('[id="btn-send-otp"]').click();
    await page.locator('[id="otp"]').fill('214365');
    await page.locator('[id="btn-send-verify"]').click();
    console.log(await page.locator('[class="subheader"]').textContent());
    await page.locator('[class="icon-2x icon-signout"]').click();
    await page.locator('[id="username"]').fill('practice');
    await page.locator('[id="password"]').fill('SuperSecretPassword!');
    await page.locator("//button[normalize-space()='Login']").click();
    console.log(await page.locator('[id="flash"]').innerText());

});