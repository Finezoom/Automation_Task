import { test, expect, Browser } from '@playwright/test';

let baseURL = 'http://192.168.1.49:8086/'
async function Makerlogin(page) {
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
async function Checkerlogin(page) {
    await page.locator('#toolbar-logout').getByRole('button').click();
    await page.getByRole('button', { name: 'Login ' }).click();
    await page.getByPlaceholder('Domain Id').fill('fingress');
    await page.getByPlaceholder('Login Id').fill('checker');
    await page.getByPlaceholder('Password').fill('Fingress@123');
    await page.getByRole('button', { name: 'Sign in' }).click();
}
async function logout(page) {
    await page.locator('#toolbar-languages').getByRole('button').click();
    await page.getByText('Sign out').click();
    await page.getByRole('button', { name: 'Log out' }).click();
}
async function MasterPending(page) {
    await page.getByRole('heading', { name: 'Flows & Settings' }).click({ setTimeout: 2000 });
    await page.getByRole('button', { name: ' Master pending' }).click({ setTimeout: 2000 });
}

test('Test Case 21611: Verify that the new report layout defined for the data model', async ({ page, browser }) => {
    await page.goto(baseURL);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.locator('button').filter({ hasText: 'add_circle' }).click();
    await page.getByText('Name').click();
    await page.getByPlaceholder('Name').fill('BBB');
    await page.waitForTimeout(3000);
    await page.getByText('Model').nth(0).click();
    await page.getByText('Credit transfer ').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    const text = await page.locator("//div[@role='dialog']").innerText();
    console.log(text);
    await logout(page);
    await Checkerlogin(page);
    await MasterPending(page);
    await page.pause();
    const text1 = await page.locator('td:nth-child(7)').first().textContent({ timeout: 2000 });
    console.log(text1)
    expect(text1).toBe(' BBB ');
});

test('Test Case 21612: Verify that the existing report layout can be modified', async ({ page, browser }) => {
    await page.goto(baseURL);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.getByText('edit').nth(0).click();
    await page.getByPlaceholder('Name').click();
    await page.getByPlaceholder('Name').fill('CSM');
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    console.log(await page.getByText('Layout successfully edited.').textContent());
    await logout(page);
    await Checkerlogin(page);
    await MasterPending(page);
    await page.getByRole('row', { name: 'LAY20230717420273 Report' }).getByLabel('Edit Record').first().click();
    await page.getByRole('button', { name: 'Approve' }).click();
    await logout(page);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.screenshot({ path: 'Modified.png', fullPage: true });
});

test('Test Case 21613: Verify that the new report layout can be defined with the unique name', async ({ page, browser }) => {
    await page.goto(baseURL);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.locator('button').filter({ hasText: 'add_circle' }).click();
    await page.getByText('Name').click();
    await page.getByPlaceholder('Name').fill('Bank');
    await page.waitForTimeout(3000);
    await page.getByText('Model').nth(0).click();
    await page.getByText('Credit transfer ').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.waitForTimeout(2000);
    console.log(await page.getByText('Layout successfully created.').textContent());
    await logout(page);
    await Checkerlogin(page);
    await MasterPending(page);
    await page.getByRole('row', { name: 'LAY20240102728958 Report' }).getByLabel('Edit Record').first().click();
    await page.getByRole('button', { name: 'Approve' }).click();
    await logout(page);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.screenshot({ path: 'UniqueName.png', fullPage: true });
});

test.only('Test Case 21615: Verify that the report layouts submitted is available in the queue', async ({ page, browser }) => {
    await page.goto(baseURL);
    await Makerlogin(page);
    await Layoutpage(page);
    await page.locator('button').filter({ hasText: 'add_circle' }).click();
    await page.getByText('Name').click();
    await page.getByPlaceholder('Name').fill('ACD');
    await page.waitForTimeout(3000);
    await page.getByText('Model').nth(0).click();
    await page.getByText('Credit transfer ').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    const text = await page.locator("//div[@role='dialog']").innerText();
    console.log(text);
    await page.screenshot({ path: 'Queue.png', fullPage: true });
    
});
