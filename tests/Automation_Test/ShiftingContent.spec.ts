import { test, expect } from '@playwright/test';

test('List', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/shifting-content');
    await page.getByRole('link', { name: 'Example 3: List' }).click();
    const initialContent = await page.locator("(//div[@class='row'])[1]").innerText();
    console.log('Initial Content:', initialContent);
    console.log('\n');
    await page.reload();
    const contentAfterReload1 = await page.locator("(//div[@class='row'])[1]").innerText();
    console.log('Content After First Reload:', contentAfterReload1);
    console.log('\n');
    await page.reload();
    const contentAfterReload2 = await page.locator("(//div[@class='row'])[1]").innerText();
    console.log('Content After Second Reload:', contentAfterReload2);
    console.log('\n');
    expect(initialContent).not.toEqual(contentAfterReload1);
    expect(contentAfterReload1).not.toEqual(contentAfterReload2);
});

test('Image Shifting', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/shifting-content/image?image_type=simple');
    const beforeReloadScreenshot = await page.screenshot();
    await page.reload();
    const afterReloadScreenshot = await page.screenshot();
    const imagesAreEqual = compareScreenshots(beforeReloadScreenshot, afterReloadScreenshot);
    if (imagesAreEqual) {
        console.log('Shifting images are the same');
    } else {
        console.log('Shifting images are different');
    }
    expect(imagesAreEqual).toBe(false);
});
function compareScreenshots(screenshot1, screenshot2) {
    return Buffer.compare(screenshot1, screenshot2) === 0;
}



