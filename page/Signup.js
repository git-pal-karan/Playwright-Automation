class Signup{
    constructor(page){
        this.page = page;
        this.name = this.page.locator("[data-qa=signup-name]")
        this.sEmail = this.page.locator("[data-qa=signup-email]")
        this.signupBtn = this.page.locator("[data-qa=signup-button]")
    }

    signUp(){
        this.name.fill("Test");
        this.sEmail.fill('Test@test.com');
        this.signupBtn.click();
    }
}

