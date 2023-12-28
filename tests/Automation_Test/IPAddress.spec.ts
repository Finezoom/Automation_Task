import { test, expect, Browser } from '@playwright/test';
test('IP Information', async ({ page }) => {
    await page.goto("https://practice.expandtesting.com/my-ip");
    const ipv4 = await page.locator('[id="ipv4"]').textContent();
    const ipv6 = await page.textContent('[id="ipv6"]');
    const country = await page.textContent('[id="country"]');
    const city = await page.textContent('[id="city"]');
    const timezone = await page.textContent('[id="timezone"]');
    console.log(ipv4);
    console.log(ipv6);
    console.log(country);
    console.log(city);
    console.log(timezone);

});
