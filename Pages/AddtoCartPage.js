class AddtoCartPage {
    constructor(page) {
        this.page = page;
        this.cart = page.locator("//a[contains(text(),'Cart')]");
        this.deleteproduct = page.locator("//a[contains(text(),'Delete')]");

    }

    async clickoncart() {

        await this.cart.click();
    }

    async deleteProduct() {

        await this.deleteproduct.click();

    }

}
module.exports = { AddtoCartPage }