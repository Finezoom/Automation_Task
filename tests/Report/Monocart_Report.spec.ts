import { test, expect, Browser } from '@playwright/test';

test('Verify that both A & B test variation 2 by simultaneously testing and learning from different versions of a page to identify which text functionality yields the best results toward a desired outcome.', async ({ page }) => {

    const originalURL = 'https://practice.expandtesting.com/abtest';
    const modifiedURL = originalURL + '?abtest_off=true';
    await page.goto(modifiedURL);
    await page.close();

});

test('Ensure that the autocomplete feature for country name functionality, and able to provide relevant suggestions as the user inputs', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/autocomplete');
    await page.locator('[id="country"]').fill('Ind');
    await page.getByText('India').hover();
    await page.getByText('India').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    const text = await page.locator("(//p[@id='result'])[1]").allTextContents();
    console.log('Text : ' + text)
    await page.close();

});

test('Verify that the application able to calculates BMI and Body Fat based on the provided age, height, and weight', async ({ page }) => {

    function calculateBMI(height: number, weight: number): number {
        const heightInMeters: number = height / 100;
        const bmi: number = weight / (heightInMeters * heightInMeters);
        return bmi;
    }
    function getBMICategory(bmi: number): string {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 25) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 30) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
    const gender: string = 'male';
    const age: number = 20;
    const height: number = 170;
    const weight: number = 50;
    const bmi: number = calculateBMI(height, weight);
    const bmiCategory: string = getBMICategory(bmi);
    const profileReport: Record<string, any> = {
        gender,
        age,
        height,
        weight,
        bmi,
        bmiCategory,
    };

    if (age < 2 || age > 120) {
        console.error('Invalid age. Age must be between 2 and 120.');
    } else {
        console.log('Profile Report:');
        console.log('----------------');
        console.log('Gender:', profileReport.gender);
        console.log('Age:', profileReport.age);
        console.log('Height:', profileReport.height, 'cm');
        console.log('Weight:', profileReport.weight, 'kg');
        console.log('BMI:', profileReport.bmi.toFixed(2));
        console.log('BMI Category:', profileReport.bmiCategory);
    }

});

test(' Ensure that the application able to detect and handle broken images on web pages', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/broken-images');
    await page.waitForLoadState("domcontentloaded");
    const images = page.locator("img");
    console.log(await images.count());
    const allimage = await images.all();
    for await (const img of allimage) {
        const imgsrc = await img.getAttribute("src");
        console.log('Broken Image : ' + imgsrc);
    }
});

test('Ensure that the application locator strategies can identify and interact with elements having unique IDs, an unhelpful table, and a canvas element', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/challenging-dom');
    await page.locator('[class*="btn btn-primary"]').nth(0).click();
    const text = await page.locator('[id*="c"]').nth(3).allInnerTexts();
    console.log('Text Content:', text);

});

test('Ensure that the application allows users to enable and disable checkbox elements, and that the corresponding UI changes reflect the state of the checkboxes', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/checkboxes');
    await page.locator('[id="checkbox1"]').click();
    await page.pause();
    await page.locator('[id="checkbox2"]').click();

});

test('Ensure that the application can displays messages of different types using corresponding console statements like log, info, warn, error.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/console-logs');
    console.log('This is a simple message.');
    console.warn('This is a warning message.');
    console.error('This is an error message.');
    console.info('This is an info message.');
    console.log('This is a debugging message.');
    const data = [
        { message: 'message1', value: 42 },
        { message: 'message2', value: 73 }
    ];
    console.table(data);
    console.debug('This is a debugging message.');

});

test('Ensure that the contact form on the application allows users to submit inquiries successfully and that the system appropriately handles incoming questions', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/contact#');
    await page.locator('[type*="text"]').nth(0).fill('Bala Surya');
    await page.locator('[type*="text"]').nth(1).fill('balasurya@gmail.com');
    await page.locator('[name="address"]').fill('Thank You');
    await Promise.all([
        page.click("//a[normalize-space()='Send']"),

    ]);
});

test('Verify that the application custom context menu able to triggers a JavaScript alert when right-clicking', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/context-menu');
    page.on("dialog", (dialog) => {
        console.log('Message :', dialog.message());
        console.log('Type :', dialog.type());
        dialog.accept();
    })
    await page.click("//div[@id='hot-spot']", { button: 'right' });
});

test('Ensure that the website notifies users of consent through an alert popup that involves the use of cookies', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/cookie-alert');
    page.on('dialog', dialog => dialog.accept());
    await page.getByRole('button', { name: 'I Accept' }).click();
    await page.pause();

});

test('Ensure that the application supports the use of ID or class attributes to signify the group of rows and columns in a data table', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/tables');
    const text1 = await page.locator("(//table[@id='table1'])[1]").innerText();
    console.log(text1);

    console.log('===========================================================================================')

    const text2 = await page.locator("(//thead)[1]").innerText();
    const text3 = await page.locator("(//tbody)[1]").innerText();
    console.log(text2);
    console.log(text3);

});

test('Ensure that dynamic elements on the page can exhibit the expected behavior of disappearing or reappearing during each page load', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/disappearing-elements');

    // Get the initial text before the reload
    const textBeforeReload = await page.locator('[type="button"]').allInnerTexts();
    const filteredTextBeforeReload = textBeforeReload.filter((value: string) => value.trim() !== '');
    console.log('Elements before reload:', filteredTextBeforeReload);

    // Reload the page
    await page.reload();

    // Get the text after the reload
    const textAfterReload = await page.locator('[type="button"]').allInnerTexts();
    const filteredTextAfterReload = textAfterReload.filter((value: string) => value.trim() !== '');
    console.log('Elements after reload:', filteredTextAfterReload);

    // Validate if elements have disappeared or not
    if (filteredTextBeforeReload.join() === filteredTextAfterReload.join()) {
        console.log('Elements have NOT disappeared.');
    } else {
        console.log('After reload Starred Text Elements have disappeared.');
    }
});

test('Ensure that the application can allows users to download files of various file formats successfully', async ({ page }) => {

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

test('Ensure that the application allows users to view the value of a slider by using arrow keys and the mouse to adjust the slider position', async ({ page, browser }) => {

    await page.goto('https://practice.expandtesting.com/horizontal-slider');
    const sliderHandle = await page.locator('[type="range"]');
    const sliderBound = await sliderHandle.boundingBox();
    if (sliderBound) {
        const targetX = sliderBound.x + sliderBound.width / 2;
        const targetY = sliderBound.y + sliderBound.height / 2;
        await page.mouse.move(targetX, targetY);
        await page.mouse.down();
        await page.mouse.move(targetX + 30, targetY);
        await page.mouse.up();
        await page.waitForTimeout(3000);
        const value = await page.locator('[id="range"]').textContent();
        console.log('Slider Value : ' + value)
    }
});

test('Ensure that the application can allow users to select their date of birth, page elements, and country from respective dropdown options', async ({ page }) => {

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

test('Verify that the application can display new and evolving text and images on each page load', async ({ page }) => {

    const baseUrl = 'https://practice.expandtesting.com/dynamic-content';
    const dynamicContentUrl = baseUrl;
    const staticContentUrl = baseUrl + '?with_content=static';
    // Dynamic
    await page.goto(dynamicContentUrl);
    await page.screenshot({ path: 'screenshot1.png' });
    await page.reload();
    await page.screenshot({ path: 'screenshot2.png' });
    // Static
    await page.goto(staticContentUrl);
    await page.screenshot({ path: 'screenshot3.png' });
    await page.reload();
    await page.screenshot({ path: 'screenshot4.png' });

});

test('Ensure that the application can allows the removal/addition of checkboxes and enables/disables elements dynamically', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-controls?');
    await page.locator("//input[@type='checkbox']").click();

    await page.getByRole('button', { name: 'Remove' }).click();
    console.log('Remove Icon : ', await page.locator("//p[@id='message']").innerText());

    await page.getByRole('button', { name: 'Add' }).click();
    console.log('Add Icon : ', await page.locator("//p[@id='message']").innerText());

    await page.getByRole('button', { name: 'Enable' }).click();
    console.log('Enable Icon : ', await page.locator('[id*="m"]').nth(4).innerText());

    await page.getByRole('button', { name: 'Disable' }).click();
    console.log('Disable Icon : ', await page.locator('[id*="m"]').nth(4).innerText());

});

test('Ensure that automation tools can skip dynamic IDs and generate XPath for accurate element selection', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-id');
    const buttonLocator = await page.locator('button:has-text("Button with Dynamic ID")');
    await buttonLocator.click();

    await page.waitForSelector('button:visible');
    const isButtonClicked = await buttonLocator.isVisible();
    if (isButtonClicked) {
        console.log('Button was clicked successfully using the new selector.');
    } else {
        console.error('Button was not clicked or not found with the new selector.');
    }
});

test('Verify that the application and automation tools can handle the existence and non-display of hidden elements on page load', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-loading');
    await page.locator("//a[contains(text(),'Example 1: Element on page that is')]").click();
    await page.getByRole('button', { name: 'Start' }).click();
    console.log(await page.locator("div[id='finish'] h4").textContent());

});

test('Ensure that the application and automation tools can handle the insertion of elements into the page structure after the initial load', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/dynamic-loading');
    await page.getByRole('link', { name: 'Example 2: Element rendered' }).click();
    await page.getByRole('button', { name: 'Start' }).click();
    const selector = 'h4';
    await page.waitForSelector(selector);
    const text = await page.textContent(selector);
    console.log(text);

});

test('Verify that the application displays the entry ad when entering the page', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/');
    await page.getByRole('link', { name: 'Entry Ad' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('link', { name: 'click here' }).click();

});

test('Verify that a modal window appears on the screen when the mouse moves out of the viewport pane', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/exit-intent');
    await page.locator('html').dispatchEvent('mouseleave');
    await page.pause();
    await page.locator('[id="close-modal-btn"]').click();

});

test('Ensure that the application allows users to upload a file using the file uploader', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload');
    await page.locator("[type='file']").setInputFiles("C:\Users\blues\Downloads\demo.jpg");
    await page.waitForTimeout(5000);
    await page.locator("[id='fileSubmit']").click();

});

test('Ensure that the application able to displays different types of content each time the page is refreshed under the floating menu', async ({ page }) => {

    const url = 'https://practice.expandtesting.com/floating-menu';
    const floatingMenuSelector = "(//div[@class='scroll col-md-10 large-centered'])[1]";

    const numberOfRefreshes = 5;
    let refreshCount = 0;

    for (let i = 0; i < numberOfRefreshes; i++) {
        await page.goto(url);
        await page.waitForSelector(floatingMenuSelector);
        await page.screenshot({ path: `full_page_screenshot_refresh_${refreshCount + 1}.png`, fullPage: true });
        refreshCount++;
    }
});

test('Verify that the application able to validates user input correctly under form validation', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/form-validation');
    await page.locator("[name='ContactName']").fill('surya');
    await page.locator("[name='contactnumber']").fill('123-4567890');
    await page.locator("[name='pickupdate']").fill('1999-12-28');
    await page.locator("[class='form-select']").selectOption('cash on delivery');

    // Submit the form
    await page.click('button[type="submit"]');

    // print
    const form = await page.locator('[role*="a"]').allTextContents();
    console.log(form);

});

test.use({
    geolocation: { longitude: 41.890221, latitude: 12.492348 },
    permissions: ['geolocation'],
});

test('Verify that the application can retrieves and displays the current latitude and longitude on clicking the geolocation button', async ({ page, browser, context }) => {

    await context.setGeolocation({ latitude: 77.7247936, longitude: 8.6816213, });
    await page.goto('https://practice.expandtesting.com/geolocation');
    await page.locator("//button[@id='geoBtn']").click();
    console.log(await page.locator('[id="lat-value"]').textContent());
    console.log(await page.locator('[id="long-value"]').textContent());
    await page.locator("//a[normalize-space()='See it on Google']").click();
    await page.screenshot({ path: 'location.png', fullPage: true })

});

test('Validate the Tracking of Click Events with Additional Parameters', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/google-tracking-events#');
    await page.click("//a[@id='click-event-link']");
    console.log(await page.locator("(//div[@id='flash-message'])[2]").innerText());

});

test('Ensure that the application can tracks form submission events when the user clicks the submit button, including the use of additional parameters like event_category and event_label', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/google-tracking-events#');
    await page.locator('[type="email"]').fill('balasurya1999@gmail.com');
    await page.locator('[class="form-control"]').nth(1).fill('Thank You');
    await page.locator("button[type='submit']").click();
    console.log(await page.locator("(//div[@id='flash-message'])[2]").innerText());

});

test('Ensure that additional information able to displayed when hovering over an image.', async ({ page, browser }) => {

    await page.goto('https://practice.expandtesting.com/hovers');
    const User1 = await page.locator('[class="figure"]').nth(0);
    await User1.hover();
    const text1 = await User1.allInnerTexts();
    console.log(text1)

    const User2 = await page.locator('[class="figure"]').nth(1);
    await User2.hover();
    const text2 = await User2.allInnerTexts();
    console.log(text2)

    const User3 = await page.locator('[class="figure"]').nth(2);
    await User3.hover();
    const text3 = await User3.allInnerTexts();
    console.log(text3)

});

test('Ensure that the webpage able to displays all HTTP headers sent to the server.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/http-headers');
    const text = await page.locator('[class="table-responsive"]').innerText();
    console.log(text);

});

test('Verify that continuous scrolling or infinite scrolling can provides a seamless user experience', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/infinite-scroll');
    async function scrollToEnd() {
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
        await page.waitForTimeout(1000);
    }

    const maxScrolls: number = 5;
    for (let i: number = 0; i < maxScrolls; i++) {
        await scrollToEnd();
        console.log(`Scrolled ${i + 1} times`);
    }
});

test('Verify that the application able to retrieves and displays users IP address with details', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/my-ip");
    const ipv4 = await page.locator('[id="ipv4"]').textContent();
    const ipv6 = await page.textContent('[id="ipv6"]');
    const country = await page.textContent('[id="country"]');
    const city = await page.textContent('[id="city"]');
    const timezone = await page.textContent('[id="timezone"]');
    console.log(ipv4);
    console.log(ipv6);
    console.log(country);
    console.log(city);
    console.log(timezone);

});

test('Ensure that the automation script able to interact with and handle challenges posed by jQuery UI Widgets.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/jqueryui');
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Downloads' }).hover();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'PDF' }).click();
    const download = await downloadPromise;
});

test('Ensure that the automation script can interact with and handle challenges posed by jQuery UI Menus', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/jqueryui');
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Back to JQuery UI' }).click();
    await page.getByRole('link', { name: 'Menu' }).click();
    await page.getByRole('menuitem', { name: 'Enabled' }).hover();
    await page.getByRole('menuitem', { name: 'Downloads' }).hover();
    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('menuitem', { name: 'CSV' }).click();
    const download = await downloadPromise;
});

test('Ensure that the automation script can handle JavaScript alerts dialog', async ({ page }) => {
    
    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[onclick="jsAlert()"]');
    page.on("dialog", (dialog) => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept();
    })
    await ele.click();
});

test('Ensure that the automation script can handle JavaScript confirm dialogs', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[id="js-confirm"]');
    page.on("dialog", (dialog) => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept();

    })
    await ele.click();
});

test('Ensure that the automation script can handle JavaScript prompts dialog', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/js-dialogs');
    const ele = await page.locator('[id="js-prompt"]');

    page.on("dialog", async dialog => {
        console.log('Type :', dialog.type());
        console.log('Message :', dialog.message());
        dialog.accept('Surya');
    })
    await ele.click();

});


test('Verify that the automation script can remains resilient when encountering JavaScript errors on the webpage', async ({ page }) => {

    page.on('pageerror', (error) => {
        console.error('Page error occurred :', error);
    });
    await page.goto('https://practice.expandtesting.com/javascript-error');
    await page.close();

});

test('Validate the Input Reflection Based on Key Press Events', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/key-presses');
    await page.pause();
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('Backspace');
    await page.screenshot({ path: 'Backspace.png' });

});

test('Verify that the automation script can handles large and deeply nested DOM structures without encountering rendering issues or performance bottlenecks', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/large');
    const sibling = await page.locator('[class*="column-"]').allTextContents();

    // Extract text content of the table
    const valueToSearch = '50.51';
    const valueFound = await page.evaluate((value) => {
        const cell = [...document.querySelectorAll('[class*="column-"]')].find((el) => el.textContent?.trim() === value);
        return cell ? 'Value found' : 'Value not found';
    }, valueToSearch);

    console.log(valueFound)

});

test('Ensure that the automation script able to interacts with the opening of a new window', async ({ page, context }) => {

    await page.goto("https://practice.expandtesting.com/windows");
    await page.locator('text="Click Here"').click();
    const pagePromise = context.waitForEvent('page');
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    console.log(await newPage.title());

});

test('Ensure that the automation script able to logs in using OTP sent to a placeholder email', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/otp-login');
    await page.locator('[id="email"]').fill('practice@expandtesting.com');
    await page.locator('[id="btn-send-otp"]').click();
    await page.locator('[id="otp"]').fill('214365');
    await page.locator('[id="btn-send-verify"]').click();
    console.log(await page.locator('[class="subheader"]').textContent());
    await page.locator('[class="icon-2x icon-signout"]').click();
    await page.locator('[id="username"]').fill('practice');
    await page.locator('[id="password"]').fill('SuperSecretPassword!');
    await page.locator("//button[normalize-space()='Login']").click();
    console.log(await page.locator('[id="flash"]').innerText());

});

test('Ensure that the automation script can view an element by scrolling to make it visible.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/scrollbars');
    await page.locator("//button[@id='hidingButton']").scrollIntoViewIfNeeded();
    const text = await page.locator("//button[@id='hidingButton']").innerText();
    console.log('Text : ' + text)

});

test('Ensure that users can download secure files from the application without encountering errors, and validate the reliability of the file download process.', async ({ browser, }) => {

    const context = await browser.newContext({
        httpCredentials: {
            username: "admin",
            password: "admin"
        }
    })
    const page = await context.newPage();
    await page.goto("https://practice.expandtesting.com/download-secure");
    await page.locator('[data-testid="cdct.jpg"]').click();
    await page.waitForTimeout(5000);

});

test('Verify that Shadow DOM can implemented correctly, encapsulating HTML markup, CSS styles, and JavaScript code within a custom HTML element.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/shadowdom');
    const shadowDomButton = await page.locator('button:has-text("This button is inside a")');
    await shadowDomButton.click();
    const buttonText = await shadowDomButton.textContent();
    expect(buttonText).toContain('This button is inside a Shadow DOM.');
    console.log(buttonText);

});

test('Ensure that the automation script can interact with a list of dynamic content, and validate the stability and consistency of the information.', async ({ page }) => {

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

test('Ensure that images on the webpage do not shift unexpectedly, maintaining a stable position on each page load.', async ({ page }) => {

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

test('Ensure that the application can performs well, even when third-party site resources delays in loading', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/slow");
    await page.waitForTimeout(20000);
    const resultText = await page.textContent('[id="result"]');
    expect(resultText).toContain('The slow task has finished. Thanks for waiting!');
    console.log(resultText);

});

test('Verify that the application can handles various HTTP status codes and responds to different server responses', async ({ page }) => {

    const url = 'https://practice.expandtesting.com/status-codes';
    await page.goto(url);
    const status200 = await page.locator("//a[normalize-space()='200']").textContent();
    console.log(status200, 'Success! Page loaded successfully.');
    const status301 = await page.locator("//a[normalize-space()='301']").textContent();
    console.log(status301, 'Redirect! The requested page has moved permanently.');
    const status404 = await page.locator("//a[normalize-space()='404']").textContent();
    console.log(status404, 'Not Found! The requested page was not found.');
    const status500 = await page.locator("//a[normalize-space()='500']").textContent();
    console.log(status500, 'Internal Server Error! There was a server error.');

    // Switch Statement
    const statusLocator = (code: number) => `//a[normalize-space()='${code}']`;
    const statusCode = await page.locator(statusLocator(200)).textContent();
    switch (statusCode) {
        case '200':
            console.log(statusCode, 'Success! Page loaded successfully');
            break;
        case '301':
            console.log(statusCode, 'Redirect! The requested page has moved permanently');
            break;
        case '404':
            console.log(statusCode, 'Not Found! The requested page was not found');
            break;
        case '500':
            console.log(statusCode, 'Internal Server Error! There was a server error');
            break;
        default:
            console.log('Unhandled status code');

            
    }
});

test('Verify that tooltips can displayed correctly and interactively when users long-press a view or hover their mouse over it.', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/tooltips');
    await page.locator('[id="btn1"]').hover();
    console.log(await page.locator('[id="btn1"]').textContent());
    await page.locator('[id="btn2"]').hover();
    console.log(await page.locator('[id="btn2"]').textContent());
    const text = await page.locator('[id="btn3"]').isVisible();
    console.log(await page.locator('[id="btn3"]').textContent());
    await page.locator('[id="btn4"]').isVisible();
    console.log(await page.locator('[id="btn4"]').textContent());
    await page.locator('[id="btn5"]').isVisible();
    console.log(await page.locator('[id="btn5"]').textContent());

});

test('Verify that the application can handle and respond appropriately to randomly introduced typos on each page load.', async ({ page }) => {

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