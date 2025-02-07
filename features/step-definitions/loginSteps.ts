import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/LoginPage';

Given('User is located on the main page of saucedemo website', async () => {
    await LoginPage.open();
});

When('User click "Login" button', async () => {
    await LoginPage.clickLogin();
});

// Then('User should see "Epic sadface: Username is required" error message', async () => {
//     expect(await LoginPage.getErrorMessageText()).toContain('Epic sadface: Username is required');
// });

Then('User should see {string} error message', async (expectedMessage: string) => {
    const errorMessage = await LoginPage.getErrorMessageText();
    if (!errorMessage.includes(expectedMessage)) {
        throw new Error(`Expected "${expectedMessage}", got "${errorMessage}"`);
    }
});