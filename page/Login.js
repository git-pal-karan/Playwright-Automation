class Login {
    constructor(page) {
        this.page = page;
        this.lEmail = this.page.locator("[data-qa=login-email]");
        this.lPassword = this.page.locator("[data-qa=login-password]");
        this.loginBtn = this.page.locator("[data-qa=login-button]");
    }

    login(){
        this.lEmail.fill('Test@test.com');
        this.lPassword.fill("Demo@123");
        this.loginBtn.click();

    }
}