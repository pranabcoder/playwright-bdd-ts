import {Given} from "@cucumber/cucumber";
import {CustomWorld} from "../hooks/world";

Given(/^user searches the option name as (.*)$/, async function (this: CustomWorld, optionName: string) {
    await this.pages.dashboardSearchPage.enterOptionName(optionName);
});