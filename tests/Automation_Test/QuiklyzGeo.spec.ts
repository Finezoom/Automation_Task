import { test, expect, BrowserContext } from '@playwright/test';

test('Geolocation', async ({ page, context }) => {
  await page.goto('https://uat.quiklyz.com/');
  await page.locator("text='Bengaluru'").click();
  await page.locator("text='Corporate'").click();
  await page.locator('[aria-haspopup="true"]').nth(1).click();
  await page.locator('[class="loginmenubutton text-center mt-3 ng-star-inserted"]').click();
  await page.locator('[type="email"]').nth(0).fill('Quiklyz@delhivery.com');
  await page.locator('[class="mat-button-wrapper"]').nth(5).click();
  await page.locator('[id="otpField-0"]').nth(0).fill('1');
  await page.locator('[id="otpField-1"]').nth(0).fill('2');
  await page.locator('[id="otpField-2"]').nth(0).fill('3');
  await page.locator('[id="otpField-3"]').nth(0).fill('4');
  await page.locator('[id="otpField-4"]').nth(0).fill('5');
  await page.locator('[id="otpField-5"]').nth(0).fill('6');
  await page.locator('[type="button"]').nth(6).click();
  const pagePromise = context.waitForEvent('page');
  await page.click('text=" https://bit.karza.in/s/HACgFJe "')
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  await newPage.getByText('internet connectivity').waitFor({ state: "visible" });
  const text = await newPage.getByText('internet connectivity').textContent();
  console.log(text);
  await page.pause();
  await newPage.getByRole('button', { name: "Start call with the Agent" }).click();
 
  permissions: ['geolocation']
  await context.grantPermissions(['geolocation']);

});