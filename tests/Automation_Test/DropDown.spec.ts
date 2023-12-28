import { test, expect, Browser } from '@playwright/test';
test('Dropdown', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dropdown');
    const opt = await page.$("#dropdown");
    console.log(await opt?.selectOption("1"));
    const element = await page.locator('[class="form-control"]');
    console.log(await element.selectOption("10"));
    const country = await page.locator('[id="country"]');
    console.log(await country.selectOption("Australia"));
  
    // Get all options from the dropdown using evaluate
    const dropdownSelector = '#country';
    const allOptions = await page.evaluate((selector) => {
      const dropdown = document.querySelector(selector) as HTMLSelectElement;
      const options = Array.from(dropdown.options);
      return options.map(option => {
        return {
          text: option.text,
          value: option.value
        };
      });
    }, dropdownSelector);
  
    // Print all values
    console.log('All Values from Dropdown:', allOptions);
  
  });