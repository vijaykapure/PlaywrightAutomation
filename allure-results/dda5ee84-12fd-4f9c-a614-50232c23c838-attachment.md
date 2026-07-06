# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintest.spec.js >> verify add to cart
- Location: tests\logintest.spec.js:42:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//td[contains(text(),\'Sony xperia z5\')]')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//td[contains(text(),\'Sony xperia z5\')]')

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: "#"
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
- heading "Products" [level=2]
- table:
  - rowgroup:
    - row "Pic Title Price x":
      - columnheader "Pic"
      - columnheader "Title"
      - columnheader "Price"
      - columnheader "x"
  - rowgroup
- heading "Total" [level=2]
- heading [level=3]
- button "Place Order"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseTest');
  2  | 
  3  | const testdata = JSON.parse(JSON.stringify(require('../Utils/testdata.json')));
  4  | 
  5  | //name tagging for testcase npx playwright test --grep " @smoke"
  6  | test('@smoke verifylogindemoblaze', async ({ page, poManager }) => {
  7  | 
  8  |     const loginpage = poManager.getLoginPage();
  9  | 
  10 |     await loginpage.navigate();
  11 |     await loginpage.login(testdata.username, testdata.password);
  12 |     await expect(page.locator('#nameofuser')).toBeVisible();
  13 | });
  14 | 
  15 | 
  16 | test('verify valid logo after login', async ({ page, poManager }) => {
  17 | 
  18 |     const loginpage = poManager.getLoginPage();
  19 |     const homepage = poManager.getHomePage();
  20 | 
  21 |     await loginpage.navigate();
  22 |     await loginpage.login(testdata.username, testdata.password);
  23 | 
  24 |     const logo = homepage.getLogoLocator();
  25 |     await expect(logo).toBeVisible();
  26 |     await expect(logo).toContainText('PRODUCT STORE');
  27 | });
  28 | 
  29 | 
  30 | test('verify product is searchable after login', async ({ page, poManager }) => {
  31 | 
  32 |     const loginpage = poManager.getLoginPage();
  33 |     const dashboardpage = poManager.getDashboardPage();
  34 | 
  35 |     await loginpage.navigate();
  36 |     await loginpage.login(testdata.username, testdata.password);
  37 |     const productLocator = dashboardpage.getProductLocator(testdata.productname);
  38 |     await expect(productLocator).toBeVisible();
  39 | });
  40 | 
  41 | 
  42 | test('verify add to cart', async ({ page, poManager }) => {
  43 | 
  44 |     const loginpage = poManager.getLoginPage();
  45 |     const dashboardpage = poManager.getDashboardPage();
  46 |     const addtocartpage = poManager.getAddtoCartPage();
  47 | 
  48 |     await loginpage.navigate();
  49 |     await dashboardpage.selectProduct(testdata.productname);
  50 |     await dashboardpage.clickAddToCart();
  51 |     await addtocartpage.clickoncart();
  52 | 
> 53 |     await expect(page.locator("//td[contains(text(),'Sony xperia z5')]")).toBeVisible();
     |                                                                           ^ Error: expect(locator).toBeVisible() failed
  54 | });
  55 | 
  56 | 
  57 | test('verify delete product', async ({ page, poManager }) => {
  58 | 
  59 |     const loginpage = poManager.getLoginPage();
  60 |     const dashboardpage = poManager.getDashboardPage();
  61 |     const addtocartpage = poManager.getAddtoCartPage();
  62 | 
  63 |     await loginpage.navigate();
  64 |     await dashboardpage.selectProduct(testdata.productname);
  65 |     await dashboardpage.clickAddToCart();
  66 |     await addtocartpage.clickoncart();
  67 |     await addtocartpage.deleteProduct();
  68 | 
  69 |     await expect(page.locator("//td[contains(text(),'Sony xperia z5')]")).toBeHidden();
  70 | });
  71 | 
```