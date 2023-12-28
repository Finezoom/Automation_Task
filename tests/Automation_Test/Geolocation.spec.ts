import { test, expect, Browser } from '@playwright/test';

test.use({
  geolocation: { longitude: 41.890221, latitude: 12.492348 },
  permissions: ['geolocation'],
});

test('Automate Geolocation', async ({ page, browser, context }) => {
  await context.setGeolocation({ latitude: 77.7247936, longitude: 8.6816213, });
  await page.goto('https://practice.expandtesting.com/geolocation');
  await page.locator("//button[@id='geoBtn']").click();
  console.log(await page.locator('[id="lat-value"]').textContent());
  console.log(await page.locator('[id="long-value"]').textContent());
  await page.locator("//a[normalize-space()='See it on Google']").click();
  await page.screenshot({ path: 'location.png', fullPage: true })

});
