import { test, expect, Browser } from '@playwright/test';
test('File uploader', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator("[type='file']").setInputFiles("C:\Users\blues\Downloads\demo.jpg");
    await page.waitForTimeout(5000);
    await page.locator("[id='fileSubmit']").click();
  
  });