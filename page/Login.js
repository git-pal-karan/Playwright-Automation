const {test, expect} = require('@playwright/test');

class Login {
    constructor(page) {
        this.page = page;
        this.lEmail = this.page.locator("[data-qa=login-email]");
        this.lPassword = this.page.locator("[data-qa=login-password]");
        this.loginBtn = this.page.locator("[data-qa=login-button]");
    }

    async login(){
        await this.page.goto('https://automationexercise.com/login');
        await expect(this.page).toHaveTitle('Automation Exercise - Signup / Login');
        await this.lEmail.fill('Test@test.com');
        // await expect(this.lEmail).toHaveText('Test@test.com');  check it later 
        await this.lPassword.fill("Demo@123");
        await this.loginBtn.click();
    }
}

module.exports = Login;