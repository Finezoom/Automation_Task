import { test, expect } from '@playwright/test';

async function login(page) {
    await page.goto('http://192.168.1.49:8086/');
    await page.locator('#toolbar-logout').getByRole('button').click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByPlaceholder('Domain Id').fill('fingress');
    await page.getByPlaceholder('Login Id').fill('maker');
    await page.getByPlaceholder('Password').fill('1234');
    await page.getByRole('button', { name: 'Sign in' }).click();
}
async function Layoutpage(page) {
    await page.getByRole('heading', { name: 'System Configurations' }).click();
    await page.getByRole('button', { name: ' Report' }).click();
    await page.getByText('Report Layout').click();
}
test('Report Layout', async ({ page }) => {
    await login(page);
    await Layoutpage(page);
    await page.locator('button').filter({ hasText: 'add_circle' }).click();
    await page.getByText('Name').click();
    await page.getByPlaceholder('Name').fill('BalaSurya');
    await page.getByText('Landscape').click();
    await page.getByText('Portrait').click();
    await page.waitForTimeout(3000);
    await page.getByText('Model').nth(0).click();
    await page.getByText('Credit transfer ').click();
    await page.getByText('Template IdTemplate').click();
    await page.locator('.mat-checkbox-inner-container').first().click();
    await page.getByText('A4Page Size *').click();
    await page.getByText('A3').click();
    await page.getByText('TabularView Type *').click();
    await page.getByText('PDF', { exact: true }).click();
    await page.locator('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    await page.getByText('DataSource').click();
    await page.getByText('Credit transferDataSource').click();
    await page.getByText('Title').click();
    await page.getByText('Report TypeType *').click();
    await page.getByText('List').click();
    await page.getByText('DatasetDataset').click();
    await page.getByRole('tab', { name: 'Filters' }).click();
    await page.locator('mat-card').click();
    await page.getByText('one-column').click();
    await page.locator('mat-grid-tile').filter({ hasText: 'one-column' }).getByRole('cell').click();
    await page.getByRole('button', { name: 'Add Layout' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByLabel('', { exact: true }).click();

});