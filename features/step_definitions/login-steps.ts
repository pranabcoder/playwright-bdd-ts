import {Given} from "@cucumber/cucumber";
import {CustomWorld} from "../hooks/world";

Given('user navigates to the application login page', async function (this: CustomWorld) {
    await this.pages.loginPage.gotoLoginPage();
});


Given('user enters username as {string}', async function (username: string) {
    await this.pages.loginPage.enterUsername(username);
});


Given('user enters password as {string}', async function (password: string) {
    await this.pages.loginPage.enterPassword(password);
});


Given('user clicks on the login button', async function () {
    await this.pages.loginPage.clickLoginButton();
});
Given(/^user will reloads the entire page$/, async function () {
    await this.pages.loginPage.reloadPage();
});