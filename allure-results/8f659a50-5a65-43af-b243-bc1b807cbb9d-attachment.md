# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: google.spec.js >> Google Homepage Tests >> TC_Google_02: Verify Google logo is visible @smoke
- Location: tests\google.spec.js:17:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('img[alt="Google"]')
Expected: visible
Timeout: 4000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 4000ms
  - waiting for locator('img[alt="Google"]')

```

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps"
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
- img "Google"
- search:
  - button "Add files and tools"
  - combobox "Search"
  - button "Search by voice"
  - button "Search by image"
  - link "AI Mode"
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCY
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCc
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCg
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCk
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCo
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCs
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCCw
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCC0
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_MYhm6pw_noBmzqUhl1lw42Q6HYM%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiCy_T_nr6VAxXvdPUHHfCvF4wQ2ZgBCC4
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
- dialog "Choose Chrome, the browser built by Google":
  - text: Choose Chrome, the browser built by Google Try a fast, secure browser with automatic updates
  - button "Do not use Chrome"
  - button "Get Chrome"
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
> 20  |         await expect(googlePage.googleLogo).toBeVisible();
      |                                             ^ Error: expect(locator).toBeVisible() failed
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
  35  |         await expect(googlePage.searchResults).toBeVisible();
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