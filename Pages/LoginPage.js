class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginButton = page.locator('#login2');
        this.usernameInput = page.locator('#loginusername');
        this.passwordInput = page.locator('[id="loginpassword"]');
        this.userlogin = page.locator("//button[contains(text(),'Log in')]");


    }

    async navigate() {

        await this.page.goto("https://www.demoblaze.com/index.html");

    }

    async login(username, password) {

        await this.loginButton.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.userlogin.click();


    }
};

module.exports = { LoginPage }