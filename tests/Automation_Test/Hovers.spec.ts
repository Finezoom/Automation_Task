import { test, expect, Browser } from '@playwright/test';
test.only('Hovers', async ({ page, browser }) => {
    await page.goto('https://practice.expandtesting.com/hovers');
    const User1 = await page.locator('[class="figure"]').nth(0);
    await User1.hover();
    const text1 = await User1.allInnerTexts();
    console.log(text1)
  
    const User2 = await page.locator('[class="figure"]').nth(1);
    await User2.hover();
    const text2 = await User2.allInnerTexts();
    console.log(text2)
  
    const User3 = await page.locator('[class="figure"]').nth(2);
    await User3.hover();
    const text3 = await User3.allInnerTexts();
    console.log(text3)
    
  });