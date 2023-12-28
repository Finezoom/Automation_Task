import { test, expect } from '@playwright/test';
test('quiklyz', async ({ page }) => {
  await page.goto('https://quiklyz.com/');
  await page.locator("text='Bengaluru'").click();
  await page.locator("[class*='mat-button-wrapper']").nth(0).click();
  await page.locator("text=' Audi (1) '").click();
  await page.locator("text=' Jaguar (1) '").click();
  await page.locator("[class*='inner fa fa-exchange fa-stack-1x']").nth(0).click();
  await page.locator("[class*='inner fa fa-exchange fa-stack-1x']").nth(1).click();
  await page.click("text=Compare (2)");
  await page.click("text= Features ");
const features =  await page.locator('[class*="feature-name"]').allTextContents();
console.log(features);
const text = await page.locator("[class*='feature-value ']").allTextContents();
console.log(text); 
// const text = await page.locator("[class*='feature']").allTextContents();
// console.log(text);
  
});