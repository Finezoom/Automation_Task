import { test, expect } from '@playwright/test';

test('Handle Typo', async ({ page }) => {
    const maxAttempts = 5;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        await page.goto('https://practice.expandtesting.com/typos', { waitUntil: 'load' });
        await page.waitForTimeout(2000);

        const isTypoPresent = await page.isVisible('.potential-typo');
        if (isTypoPresent) {
            console.warn('Potential typo detected!');
        } else {
            console.log('No typo detected.');
        }

        const mainContentSelector = '.main-content';
        const isContentVisible = await page.isVisible(mainContentSelector);
        console.log(`Is Main Content Visible: ${isContentVisible}`);
    }
});

//   'typos handling' involves employing proper error handling practices,
//   adhering to best practices, and avoiding common mistakes to enhance
//   the reliability and accuracy of Playwright automation scripts.