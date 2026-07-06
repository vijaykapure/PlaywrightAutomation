# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: google.spec.js >> Google Homepage Tests >> TC_Google_04: Verify search returns results for a valid query
- Location: tests\google.spec.js:30:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#search')
Expected: visible
Timeout: 4000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 4000ms
  - waiting for locator('#search')

```

```yaml
- separator
- iframe
- separator
- text: About this page Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
- link "Why did this happen?":
  - /url: "#"
- text: "IP address: 3.7.77.58 Time: 2026-06-17T09:47:51Z URL: https://www.google.com/search?q=Playwright+automation&sca_esv=5f61f3506ee60603&source=hp&ei=RG0yaqLGId-TseMPmJDlmA0&iflsig=AFdpzrgAAAAAajJ7VArUXB_wBCH6QZWahkFyik4t_Mfw&ved=0ahUKEwii-Kye_42VAxXfSWwGHRhIGdMQ4dUDCDE&uact=5&oq=Playwright+automation&gs_lp=Egdnd3Mtd2l6IhVQbGF5d3JpZ2h0IGF1dG9tYXRpb25IE1AAWABwAHgAkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&sei=RW0yatCOH5ammtkPv4u1oQY"
```

# Test source

```ts
  1   | // @ts-check
  2   | import { test, expect } from '@playwright/test';
  3   | const { POManager } = require('../Pages/POManager');
  4   | 
  5   | test.describe('Google Homepage Tests', () => {
  6   | 
  7   |     test.beforeEach(async ({ page }) => {
  8   |         const poManager = new POManager(page);
  9   |         const googlePage = poManager.getGooglePage();
  10  |         await googlePage.navigate();
  11  |     });
  12  | 
  13  |     test('TC_Google_01: Verify Google homepage title @smoke', async ({ page }) => {
  14  |         await expect(page).toHaveTitle(/Google/);
  15  |     });
  16  | 
  17  |     test('TC_Google_02: Verify Google logo is visible @smoke', async ({ page }) => {
  18  |         const poManager = new POManager(page);
  19  |         const googlePage = poManager.getGooglePage();
  20  |         await expect(googlePage.googleLogo).toBeVisible();
  21  |     });
  22  | 
  23  |     test('TC_Google_03: Verify search box is visible and enabled @smoke', async ({ page }) => {
  24  |         const poManager = new POManager(page);
  25  |         const googlePage = poManager.getGooglePage();
  26  |         await expect(googlePage.searchBox).toBeVisible();
  27  |         await expect(googlePage.searchBox).toBeEnabled();
  28  |     });
  29  | 
  30  |     test('TC_Google_04: Verify search returns results for a valid query', async ({ page }) => {
  31  |         const poManager = new POManager(page);
  32  |         const googlePage = poManager.getGooglePage();
  33  |         await googlePage.search('Playwright automation');
  34  |         await expect(page).toHaveURL(/search/);
> 35  |         await expect(googlePage.searchResults).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  36  |     });
  37  | 
  38  |     test('TC_Google_05: Verify search result titles are present', async ({ page }) => {
  39  |         const poManager = new POManager(page);
  40  |         const googlePage = poManager.getGooglePage();
  41  |         await googlePage.search('Playwright automation');
  42  |         const titles = await googlePage.getResultTitles();
  43  |         expect(titles.length).toBeGreaterThan(0);
  44  |     });
  45  | 
  46  |     test('TC_Google_06: Verify search box accepts and retains typed text', async ({ page }) => {
  47  |         const poManager = new POManager(page);
  48  |         const googlePage = poManager.getGooglePage();
  49  |         await googlePage.searchBox.fill('Hello World');
  50  |         await expect(googlePage.searchBox).toHaveValue('Hello World');
  51  |     });
  52  | 
  53  |     test('TC_Google_07: Verify search box is cleared after clear', async ({ page }) => {
  54  |         const poManager = new POManager(page);
  55  |         const googlePage = poManager.getGooglePage();
  56  |         await googlePage.searchBox.fill('Some text');
  57  |         await googlePage.searchBox.clear();
  58  |         await expect(googlePage.searchBox).toHaveValue('');
  59  |     });
  60  | 
  61  |     test('TC_Google_08: Verify URL contains search query after performing a search', async ({ page }) => {
  62  |         const poManager = new POManager(page);
  63  |         const googlePage = poManager.getGooglePage();
  64  |         await googlePage.search('OpenAI');
  65  |         const currentUrl = page.url();
  66  |         expect(currentUrl).toContain('q=OpenAI');
  67  |     });
  68  | 
  69  |     test('TC_Google_09: Verify search suggestions appear while typing', async ({ page }) => {
  70  |         const poManager = new POManager(page);
  71  |         const googlePage = poManager.getGooglePage();
  72  |         const suggestions = await googlePage.getSearchSuggestions('Playwright');
  73  |         expect(suggestions.length).toBeGreaterThan(0);
  74  |     });
  75  | 
  76  |     test('TC_Google_10: Verify Google Search button is visible on homepage', async ({ page }) => {
  77  |         const poManager = new POManager(page);
  78  |         const googlePage = poManager.getGooglePage();
  79  |         await expect(googlePage.searchButton).toBeVisible();
  80  |     });
  81  | 
  82  |     test('TC_Google_11: Verify I\'m Feeling Lucky button is visible on homepage', async ({ page }) => {
  83  |         const poManager = new POManager(page);
  84  |         const googlePage = poManager.getGooglePage();
  85  |         await expect(googlePage.luckyButton).toBeVisible();
  86  |     });
  87  | 
  88  |     test('TC_Google_12: Verify special characters in search query are handled', async ({ page }) => {
  89  |         const poManager = new POManager(page);
  90  |         const googlePage = poManager.getGooglePage();
  91  |         await googlePage.search('@#$%^&*');
  92  |         await expect(page).toHaveURL(/search/);
  93  |     });
  94  | 
  95  |     test('TC_Google_13: Verify empty search does not navigate away from homepage', async ({ page }) => {
  96  |         const poManager = new POManager(page);
  97  |         const googlePage = poManager.getGooglePage();
  98  |         await googlePage.searchBox.press('Enter');
  99  |         await expect(page).toHaveURL(/google\.com/);
  100 |     });
  101 | 
  102 | });
  103 | 
```