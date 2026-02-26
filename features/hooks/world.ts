import {setWorldConstructor, IWorldOptions, World} from "@cucumber/cucumber";
import {Page, Browser, chromium, firefox, webkit, BrowserContext} from "playwright";
import {PageFixture} from "../../fixtures/page-fixtures";

export class CustomWorld extends World {
    public page!: Page;
    public browser!: Browser;
    public context!: BrowserContext;
    public pages!: PageFixture;

    constructor(options: IWorldOptions) {
        super(options);
    }

    async init() {
        // Load Playwright config
        const config = require('../../playwright.config').default || require('../../playwright.config');

        // Get the browser name from the environment or default to 'chromium'
        const browserName = process.env.BROWSER || 'chromium';

        // Find the matching project configuration
        const project = config.projects.find((p: any) => p.name === browserName);

        // Select a browser type
        const browserType = browserName === 'firefox' ? firefox :
            browserName === 'webkit' ? webkit : chromium;

        // Launch browser
        this.browser = await browserType.launch({
            headless: config.use?.headless ?? false,
            slowMo: config.use?.slowMo ?? 50,
        });

        // Create context with project-specific device settings
        this.context = await this.browser.newContext({
            ...config.use,
            ...project?.use,
        });

        this.page = await this.context.newPage();
        this.pages = new PageFixture(this.page);
    }

    async close() {
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);