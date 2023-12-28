import { test, expect } from '@playwright/test';

test('Launch Browser', async ({ page }) => {
    await page.goto("https://uat.quiklyz.com/");
    await page.locator("text='Bengaluru'").click();
    await page.locator("[class*='mat-button-wrapper']").nth(0).click();
    await page.locator("text='Tata Punch '").click();
    await page.locator("text=' Pure '").click();
    //await page.locator("[class='text-center d-block']").nth(3).click();
    const elements = await page.$$('[class="list-group-item droplist noborder ng-star-inserted"]');

  if (elements.length > 0) {
    for (const element of elements) {
      const textContent = await element.textContent();
      console.log('Element Content:', textContent);
    }
    console.log(" Total Count : " +elements.length);
  } else {
    console.log('No elements found with the given selector.');
  }
  const colorVariantElements = await page.$$('[class="col activecolorname text-left mt-3"]');

for (const colorVariant of colorVariantElements) {
  // Get the color value of the variant using CSS property 'background-color'
  const colorValue = await colorVariant.evaluate((el) => {
    return window.getComputedStyle(el).getPropertyValue('background-color');
  });

  // Get the text value of the variant element
  const textValue = await colorVariant.textContent();

  console.log('Color:', colorValue);
  console.log('Text value:', textValue);
}
  });