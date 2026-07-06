class GooglePage {
    constructor(page) {
        this.page = page;
        this.searchBox = page.locator('[name="q"]');
        this.searchButton = page.locator('[value="Google Search"]').first();
        this.luckyButton = page.locator('[value="I\'m Feeling Lucky"]').first();
        this.googleLogo = page.locator('img[alt="Google"]');
        this.searchResults = page.locator('#search');
        this.suggestionsList = page.locator('ul[role="listbox"]');
    }

    async navigate() {
        await this.page.goto('https://www.google.com');
    }

    async search(query) {
        await this.searchBox.fill(query);
        await this.searchBox.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
    }

    async getSearchSuggestions(query) {
        await this.searchBox.fill(query);
        await this.suggestionsList.waitFor({ state: 'visible' });
        return await this.suggestionsList.locator('li').allTextContents();
    }

    async getResultTitles() {
        await this.searchResults.waitFor({ state: 'visible' });
        return await this.page.locator('h3').allTextContents();
    }
}

module.exports = { GooglePage };
