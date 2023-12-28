import { test, expect, Browser } from '@playwright/test';

test('Status Code', async ({ page }) => {
    const url = 'https://practice.expandtesting.com/status-codes';
    await page.goto(url);

    const status200 = await page.locator("//a[normalize-space()='200']").textContent();
    console.log(status200, 'Success! Page loaded successfully.');
    const status301 = await page.locator("//a[normalize-space()='301']").textContent();
    console.log(status301, 'Redirect! The requested page has moved permanently.');
    const status404 = await page.locator("//a[normalize-space()='404']").textContent();
    console.log(status404, 'Not Found! The requested page was not found.');
    const status500 = await page.locator("//a[normalize-space()='500']").textContent();
    console.log(status500, 'Internal Server Error! There was a server error.');

// Switch Statement
    const statusLocator = (code: number) => `//a[normalize-space()='${code}']`;
    const statusCode = await page.locator(statusLocator(200)).textContent();
    switch (statusCode) {
        case '200':
            console.log(statusCode, 'Success! Page loaded successfully');
            break;
        case '301':
            console.log(statusCode, 'Redirect! The requested page has moved permanently');
            break;
        case '404':
            console.log(statusCode, 'Not Found! The requested page was not found');
            break;
        case '500':
            console.log(statusCode, 'Internal Server Error! There was a server error');
            break;
        default:
            console.log('Unhandled status code');

    }
});

