import { test, expect, Browser } from '@playwright/test';
test('Secure file download', async ({ browser, }) => {

    const context = await browser.newContext({
      httpCredentials: {
        username: "admin",
        password: "admin"
      }
    })
    const page = await context.newPage();
    await page.goto("https://practice.expandtesting.com/download-secure");
    await page.locator('[data-testid="cdct.jpg"]').click();
    await page.waitForTimeout(5000);
  
  });