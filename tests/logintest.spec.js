const { test, expect } = require('../fixtures/baseTest');

const testdata = JSON.parse(JSON.stringify(require('../Utils/testdata.json')));

//name tagging for testcase npx playwright test --grep " @smoke"
test('@smoke verifylogindemoblaze', async ({ page, poManager }) => {

    const loginpage = poManager.getLoginPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    await expect(page.locator('#nameofuser')).toBeVisible();
});


test('verify valid logo after login', async ({ page, poManager }) => {

    const loginpage = poManager.getLoginPage();
    const homepage = poManager.getHomePage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);

    const logo = homepage.getLogoLocator();
    await expect(logo).toBeVisible();
    await expect(logo).toContainText('PRODUCT STORE');
});


test('verify product is searchable after login', async ({ page, poManager }) => {

    const loginpage = poManager.getLoginPage();
    const dashboardpage = poManager.getDashboardPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    const productLocator = dashboardpage.getProductLocator(testdata.productname);
    await expect(productLocator).toBeVisible();
});


test('verify add to cart', async ({ page, poManager }) => {

    const loginpage = poManager.getLoginPage();
    const dashboardpage = poManager.getDashboardPage();
    const addtocartpage = poManager.getAddtoCartPage();

    await loginpage.navigate();
    await dashboardpage.selectProduct(testdata.productname);
    await dashboardpage.clickAddToCart();
    await addtocartpage.clickoncart();

    await expect(page.locator("//td[contains(text(),'Sony xperia z5')]")).toBeVisible();
});


test('verify delete product', async ({ page, poManager }) => {

    const loginpage = poManager.getLoginPage();
    const dashboardpage = poManager.getDashboardPage();
    const addtocartpage = poManager.getAddtoCartPage();

    await loginpage.navigate();
    await dashboardpage.selectProduct(testdata.productname);
    await dashboardpage.clickAddToCart();
    await addtocartpage.clickoncart();
    await addtocartpage.deleteProduct();

    await expect(page.locator("//td[contains(text(),'Sony xperia z5')]")).toBeHidden();
});
