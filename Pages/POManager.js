const { AddtoCartPage } = require("./AddtoCartPage");
const { DashboardPage } = require("./DashboardPage");
const { HomePage } = require("./HomePage");
const { LoginPage } = require("./LoginPage");
const { GooglePage } = require("./GooglePage");

class POManager {
    constructor(page) {
        this.page = page;
        this.loginpage = new LoginPage(this.page)
        this.dashboardpage = new DashboardPage(this.page)
        this.addtocartpage = new AddtoCartPage(this.page)
        this.homepage = new HomePage(this.page)
        this.googlepage = new GooglePage(this.page)
    }

    getLoginPage() {
        return this.loginpage;
    }

    getDashboardPage() {
        return this.dashboardpage;
    }

    getAddtoCartPage() {
        return this.addtocartpage;
    }

    getHomePage() {
        return this.homepage;
    }

    getGooglePage() {
        return this.googlepage;
    }

}

module.exports = { POManager }