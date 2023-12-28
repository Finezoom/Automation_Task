import { test } from '@playwright/test';
test('Dynamic Content', async ({ page }) => {
    const baseUrl = 'https://practice.expandtesting.com/dynamic-content';
    const dynamicContentUrl = baseUrl;
    const staticContentUrl = baseUrl + '?with_content=static';
    // Dynamic
    await page.goto(dynamicContentUrl);
    await page.screenshot({ path: 'screenshot1.png' });
    await page.reload();
    await page.screenshot({ path: 'screenshot2.png' });
    // Static
    await page.goto(staticContentUrl);
    await page.screenshot({ path: 'screenshot3.png' });
    await page.reload();
    await page.screenshot({ path: 'screenshot4.png' });

});
