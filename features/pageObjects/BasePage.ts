import {Page} from 'playwright';
import allConfig from "../../config/config.json";
import {Locator} from "@playwright/test";

export class BasePage {

    private url = allConfig.baseUrl;
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto(this.url);
    }

    async type(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async click(locator: Locator) {
        await locator.click();
    }

    getByRole(role: string, options: { name: string }) {
        return this.page.getByRole(role as any, options);
    }
    async reloadPageFromBase() {
        await this.page.reload();
    }
}