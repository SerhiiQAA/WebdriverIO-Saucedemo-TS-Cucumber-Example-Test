import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/LoginPage';

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
});

When('User click "Login" button', async () => {
    await loginPage.clickLogin();
});

Then('User should see {string} error message', async (expectedMessage: string) => {
    const errorMessage = await loginPage.getErrorMessageText();
    if (!errorMessage.includes(expectedMessage)) {
        throw new Error(`Expected "${expectedMessage}", got "${errorMessage}"`);
    }
});