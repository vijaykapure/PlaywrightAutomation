const { test, expect } = require('../fixtures/baseTest');

const parameterise = require('../Utils/parameterise.json');

for (const data of parameterise) {

    test(`Parameterized Test - ${data.productname}`, async ({ page, poManager }) => {

        const loginPage = poManager.getLoginPage();
        const dashboardPage = poManager.getDashboardPage();
        const addToCartPage = poManager.getAddtoCartPage();

        await loginPage.navigate();
        await loginPage.login(data.username, data.password);

        await dashboardPage.selectProduct(data.productname);
        await dashboardPage.clickAddToCart();

        await addToCartPage.clickoncart();
        await addToCartPage.deleteProduct(data.productname);

        await expect(
            page.locator(`//td[contains(text(),'${data.productname}')]`)
        ).toHaveCount(0);

    });

}
