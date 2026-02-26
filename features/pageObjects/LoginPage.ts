import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import allocators from "../../locators/locators.json"

export class LoginPage extends BasePage {

    private locators = allocators.loginPage;

    constructor(page: Page) {
        super(page);
    }

    async gotoLoginPage() {
        await this.navigateTo();
    }

    async enterUsername(username: string) {
        await this.type(this.getByRole('textbox', {name: this.locators.username}), username);
    }

    async enterPassword(password: string) {
        await this.type(this.getByRole('textbox', {name: this.locators.password}), password);
    }

    async clickLoginButton() {
        await this.click(this.getByRole('button', {name: this.locators.loginButton}));
    }

    async reloadPage(){
        await this.reloadPageFromBase();
    }
}