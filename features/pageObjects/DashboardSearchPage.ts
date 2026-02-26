import {BasePage} from "./BasePage";
import {Page} from "@playwright/test";
import allocators from "../../locators/locators.json"

export class DashboardSearchPage extends BasePage {

    private locators = allocators.dashboardSearchPage;

    constructor(page: Page) {
        super(page);
    }

    async enterOptionName(optionName: string) {
        await this.type(this.getByRole('textbox', {name: this.locators.optionName}), optionName);
    }
}