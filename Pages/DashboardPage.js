class DashboardPage {
    constructor(page) {
        this.page = page;
        this.addToCartBtn = page.locator("//a[contains(text(),'Add to cart')]");
    }

    async selectProduct(productname) {
        const product = this.page.locator("//a[contains(text(),'" + productname + "')]");
        await product.click();
    }

    getProductLocator(productname) {
        return this.page.locator("//a[contains(text(),'" + productname + "')]");
    }

    async clickAddToCart() {
        await this.addToCartBtn.click();
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
    }
}

module.exports = { DashboardPage };