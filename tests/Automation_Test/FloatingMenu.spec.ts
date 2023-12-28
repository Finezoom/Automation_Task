import { test, expect } from '@playwright/test';

test('Floating Menu', async ({ page }) => {
    const url = 'https://practice.expandtesting.com/floating-menu';
    const floatingMenuSelector = "(//div[@class='scroll col-md-10 large-centered'])[1]";

    const numberOfRefreshes = 5;
    let refreshCount = 0;

    for (let i = 0; i < numberOfRefreshes; i++) {
        await page.goto(url);
        await page.waitForSelector(floatingMenuSelector);
        await page.screenshot({path: `full_page_screenshot_refresh_${refreshCount + 1}.png`, fullPage: true });
        refreshCount++;
    }
});
