const { expect } = require("@playwright/test");

class Signup{
    constructor(page){
        this.page = page;
        this.name = this.page.locator("[data-qa=signup-name]")
        this.sEmail = this.page.locator("[data-qa=signup-email]")
        this.signupBtn = this.page.locator("[data-qa=signup-button]")
    }

    async signUp(){
        await this.page.goto('https://automationexercise.com/login');
        await expect(this.page).toHaveTitle('Automation Exercise - Signup / Login');
        await this.name.fill("Test");
        await this.sEmail.fill('Test@test.com');
        await this.signupBtn.click();
    }
}

module.exports = Signup;
