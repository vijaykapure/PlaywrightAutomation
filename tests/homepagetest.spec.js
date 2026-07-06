const { test, expect } = require('@playwright/test');
const { POManager } = require('../Pages/POManager');

const testdata = JSON.parse(JSON.stringify(require('../Utils/testdata.json')));

//test.describe.configure({ mode: 'parallel'})
test.describe.configure({ mode: 'serial'})
test('verify all categories', async ({ page }) => {

    const pomanager = new POManager(page);
    const homepage = pomanager.getHomePage();
    const loginpage = pomanager.getLoginPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    await homepage.getcategories();
    await expect(page.locator("[class='list-group'] a")).toHaveCount(4);

});

test('verify Phones categories products', async ({ page }) => {

    const pomanager = new POManager(page);
    const homepage = pomanager.getHomePage();
    const loginpage = pomanager.getLoginPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    await homepage.getphonesnames();
    await expect(page.locator("[id='tbodyid'] h4")).toHaveCount(9);

});

test('verify Laptops categories products', async ({ page }) => {

    const pomanager = new POManager(page);
    const homepage = pomanager.getHomePage();
    const loginpage = pomanager.getLoginPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    await homepage.getlaptopsnames();
    await expect(page.locator("[id='tbodyid'] h4")).toHaveCount(9);

});


test('verify Monitors categories products', async ({ page }) => {

    const pomanager = new POManager(page);
    const homepage = pomanager.getHomePage();
    const loginpage = pomanager.getLoginPage();

    await loginpage.navigate();
    await loginpage.login(testdata.username, testdata.password);
    await homepage.getmonitorsnames();
    await expect(page.locator("[id='tbodyid'] h4")).toHaveCount(2);

});



