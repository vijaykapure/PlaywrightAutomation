# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: google.spec.js >> Google Homepage Tests >> TC_Google_09: Verify search suggestions appear while typing
- Location: tests\google.spec.js:69:9

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('ul[role="listbox"]') resolved to 2 elements:
    1) <ul class="G43f7e" role="listbox" jsname="bw4e9b">…</ul> aka getByText('playwrightSee moreDeleteplaywright automationSee moreDeleteplaywright mcpSee')
    2) <ul class="G43f7e" role="listbox" jsname="bw4e9b"></ul> aka locator('ul').nth(3)

Call log:
  - waiting for locator('ul[role="listbox"]') to be visible
    3 × locator resolved to hidden <ul class="G43f7e" role="listbox" jsname="bw4e9b"></ul>

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - 'link "World Cup 2026: The art of the penalty kick" [ref=e23] [cursor=pointer]':
      - /url: /search?sca_esv=5f61f3506ee60603&q=FIFA+World+Cup+2026&oi=ddle&noiga=1&ct=460195071&hl=en-GB&stick=H4sIAAAAAAAC_-NgVuLQz9U3MDYoNJ_AwriIVdjN081RITy_KCdFwbm0QMHIwMgMAKor_7IlAAAA&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQPQgG
      - 'img "World Cup 2026: The art of the penalty kick" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [expanded] [active] [ref=e47]:
          - text: Playwright
          - listbox [ref=e49]:
            - generic [ref=e50]:
              - img [ref=e52]
              - option "playwright" [ref=e55]:
                - generic [ref=e56]: playwright
            - generic [ref=e57]:
              - img [ref=e59]
              - option "playwright automation" [ref=e62]:
                - generic [ref=e63]: playwright automation
            - generic [ref=e64]:
              - img [ref=e66]
              - option "playwright mcp" [ref=e69]:
                - generic [ref=e70]: playwright mcp
            - generic [ref=e71]:
              - img [ref=e73]
              - option "playwright automation tool" [ref=e76]:
                - generic [ref=e77]: playwright automation tool
            - generic [ref=e78]:
              - img [ref=e80]
              - option "playwright interview questions" [ref=e83]:
                - generic [ref=e84]: playwright interview questions
            - generic [ref=e85]:
              - img [ref=e87]
              - option "playwright documentation" [ref=e90]:
                - generic [ref=e91]: playwright documentation
            - generic [ref=e92]:
              - img [ref=e94]
              - option "playwright mcp server" [ref=e97]:
                - generic [ref=e98]: playwright mcp server
            - generic [ref=e99]:
              - img [ref=e101]
              - option "playwright meaning" [ref=e104]:
                - generic [ref=e105]: playwright meaning
            - generic [ref=e106]:
              - img [ref=e108]
              - option "playwright vs selenium" [ref=e111]:
                - generic [ref=e112]: playwright vs selenium
            - generic [ref=e113]:
              - img [ref=e115]
              - option "playwright dev" [ref=e118]:
                - generic [ref=e119]: playwright dev
        - generic [ref=e120]:
          - button "Clear" [ref=e122] [cursor=pointer]:
            - img [ref=e124]
          - link "AI Mode" [ref=e126] [cursor=pointer]:
            - generic [ref=e128]:
              - generic [ref=e129]: AI Mode
              - img [ref=e131]
      - generic [ref=e133]:
        - generic [ref=e137]:
          - button "Google Search" [ref=e138] [cursor=pointer]
          - button "I'm Feeling Lucky" [ref=e139] [cursor=pointer]
        - button "Report inappropriate predictions" [ref=e140] [cursor=pointer]:
          - generic [ref=e141]: Report inappropriate predictions
      - generic [ref=e143]:
        - button "Google Search" [ref=e144] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e145] [cursor=pointer]
  - generic [ref=e148]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e149] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCDk
    - link "বাংলা" [ref=e150] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCDo
    - link "తెలుగు" [ref=e151] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCDs
    - link "मराठी" [ref=e152] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCDw
    - link "தமிழ்" [ref=e153] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCD0
    - link "ગુજરાતી" [ref=e154] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCD4
    - link "ಕನ್ನಡ" [ref=e155] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCD8
    - link "മലയാളം" [ref=e156] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCEA
    - link "ਪੰਜਾਬੀ" [ref=e157] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_y7dlko6MH8VDXiLfseu-2hO0Neo%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwixvfe7_42VAxV-SGcHHcFzFDUQ2ZgBCEE
  - contentinfo [ref=e159]:
    - generic [ref=e160]: India
    - generic [ref=e161]:
      - generic [ref=e162]:
        - link "Advertising" [ref=e163] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e164] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e165] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e166]:
        - link "Privacy" [ref=e167] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e168] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e172] [cursor=pointer]:
          - generic [ref=e173]: Settings
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
> 24 |         await this.suggestionsList.waitFor({ state: 'visible' });
     |                                    ^ Error: locator.waitFor: Error: strict mode violation: locator('ul[role="listbox"]') resolved to 2 elements:
  25 |         return await this.suggestionsList.locator('li').allTextContents();
  26 |     }
  27 | 
  28 |     async getResultTitles() {
  29 |         await this.searchResults.waitFor({ state: 'visible' });
  30 |         return await this.page.locator('h3').allTextContents();
  31 |     }
  32 | }
  33 | 
  34 | module.exports = { GooglePage };
  35 | 
```