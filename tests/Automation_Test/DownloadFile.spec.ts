import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByTestId('1702280634223_upload').click();
  const download = await downloadPromise;
  
  const download1Promise = page.waitForEvent('download');
  await page.getByTestId('1702966542461_test.txt').click();
  const download1 = await download1Promise;
  
  const download2Promise = page.waitForEvent('download');
  await page.getByTestId('1703003588183_sample.pdf').click();
  const download2 = await download2Promise;
  
  const download3Promise = page.waitForEvent('download');
  await page.getByTestId('cdct.jpg').click();
  const download3 = await download3Promise;
  
  const download4Promise = page.waitForEvent('download');
  await page.getByTestId('some-file.json').click();
  const download4 = await download4Promise;
});