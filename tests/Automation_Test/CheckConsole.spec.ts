import { test } from '@playwright/test';

test('Check Console Log', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/console-logs');
    //console.log()
    console.log('This is a simple message.');

    //console.warm()
    console.warn('This is a warning message.');

    //console.error()
    console.error('This is an error message.');

    //console.info()
    console.info('This is an info message.');

    //console.log()
    console.log('This is a debugging message.');

    // Sample data for console.table()
    const data = [
        { message: 'message1', value: 42 },
        { message: 'message2', value: 73 }
    ];

    console.table(data);
    console.debug('This is a debugging message.');

});