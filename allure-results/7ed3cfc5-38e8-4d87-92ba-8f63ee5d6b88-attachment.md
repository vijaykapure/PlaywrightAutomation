# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: google.spec.js >> Google Homepage Tests >> TC_Google_05: Verify search result titles are present
- Location: tests\google.spec.js:38:9

# Error details

```
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for locator('#search') to be visible

```

# Test source

```ts
  1  | class GooglePage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.searchBox = page.locator('[name="q"]');
  5  |         this.searchButton = page.locator('[value="Google Search"]').first();
  6  |         this.luckyButton = page.locator('[value="I\'m Feeling Lucky"]').first();
  7  |         this.googleLogo = page.locator('img[alt="Google"]');
  8  |         this.searchResults = page.locator('#search');
  9  |         this.suggestionsList = page.locator('ul[role="listbox"]');
  10 |     }
  11 | 
  12 |     async navigate() {
  13 |         await this.page.goto('https://www.google.com');
  14 |     }
  15 | 
  16 |     async search(query) {
  17 |         await this.searchBox.fill(query);
  18 |         await this.searchBox.press('Enter');
  19 |         await this.page.waitForLoadState('domcontentloaded');
  20 |     }
  21 | 
  22 |     async getSearchSuggestions(query) {
  23 |         await this.searchBox.fill(query);
  24 |         await this.suggestionsList.waitFor({ state: 'visible' });
  25 |         return await this.suggestionsList.locator('li').allTextContents();
  26 |     }
  27 | 
  28 |     async getResultTitles() {
> 29 |         await this.searchResults.waitFor({ state: 'visible' });
     |                                  ^ Error: locator.waitFor: Target page, context or browser has been closed
  30 |         return await this.page.locator('h3').allTextContents();
  31 |     }
  32 | }
  33 | 
  34 | module.exports = { GooglePage };
  35 | 
```