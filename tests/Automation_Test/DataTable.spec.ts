import { test, expect, Browser } from '@playwright/test';
test('Data Tables', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/tables');
    const text1 = await page.locator("(//table[@id='table1'])[1]").innerText();
    console.log(text1);

    console.log('===========================================================================================')

    const text2 = await page.locator("(//thead)[1]").innerText();
    const text3 = await page.locator("(//tbody)[1]").innerText();
    console.log(text2);
    console.log(text3);
 
  });