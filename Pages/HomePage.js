class HomePage {

    constructor(page) {
        this.page = page;
        this.categories = page.locator("[class='list-group'] a");
        this.phones = page.locator("[id='tbodyid'] h4 a");
        this.laptops = page.locator("[id='tbodyid'] h4 a");
        this.monitors = page.locator("[class='row'][id='tbodyid'] h4 a");
        this.phonesclick = page.locator("//a[text()='Phones']");
        this.laptopsclick = page.locator("//a[text()='Laptops']");
        this.monitorsclick = page.locator("//a[text()='Monitors']");

    }
    getLogoLocator() {
        return this.page.locator("//*[contains(text(),'PRODUCT STORE')]").first();
    }

    async getcategories() {

        const categoriesText = await this.categories.allTextContents();
        console.log(categoriesText);

    }

    async getphonesnames() {
        await this.phonesclick.click();
        const phonesText = await this.phones.allTextContents();
        console.log(phonesText);
    }

    async getlaptopsnames() {
        await this.laptopsclick.click();
        const laptopsText = await this.laptops.allTextContents();
        console.log(laptopsText);
    }

    async getmonitorsnames() {
        await this.monitorsclick.click();
        const monitorsText = await this.monitors.allTextContents();
        console.log(monitorsText);
    }

}

module.exports = { HomePage }