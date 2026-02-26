import {Page} from 'playwright';
import {LoginPage} from "../features/pageObjects/LoginPage";
import {DashboardSearchPage} from "../features/pageObjects/DashboardSearchPage";

export class PageFixture {

    readonly loginPage: LoginPage;
    readonly dashboardSearchPage: DashboardSearchPage;
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardSearchPage = new DashboardSearchPage(page);
    }


}