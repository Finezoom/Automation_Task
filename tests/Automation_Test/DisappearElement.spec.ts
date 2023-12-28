import { test, expect, Browser } from '@playwright/test';
test('Disappear Element Validation', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/disappearing-elements');
  
    // Get the initial text before the reload
    const textBeforeReload = await page.locator('[type="button"]').allInnerTexts();
    const filteredTextBeforeReload = textBeforeReload.filter((value: string) => value.trim() !== '');
    console.log('Elements before reload:', filteredTextBeforeReload);
  
    // Reload the page
    await page.reload();
  
    // Get the text after the reload
    const textAfterReload = await page.locator('[type="button"]').allInnerTexts();
    const filteredTextAfterReload = textAfterReload.filter((value: string) => value.trim() !== '');
    console.log('Elements after reload:', filteredTextAfterReload);
  
    // Validate if elements have disappeared or not
    if (filteredTextBeforeReload.join() === filteredTextAfterReload.join()) {
      console.log('Elements have NOT disappeared.');
    } else {
      console.log('After reload Starred Text Elements have disappeared.');
    }
  });