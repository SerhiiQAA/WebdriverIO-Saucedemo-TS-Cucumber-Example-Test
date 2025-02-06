import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';
import LoginPage from '../pageobjects/LoginPage';

Given('User is located on the main page of saucedemo website', async () => {
    await LoginPage.open();
});

When('User click "Login" button', async () => {
    await LoginPage.clickLogin();
});

Then('User should see "Epic sadface: Username is required" error message', async () => {
    expect(await LoginPage.getErrorMessageText()).toContain('Epic sadface: Username is required');
});
