const{test, expect} = require("@playwright/test");

test("Verify Home Page", async({page})=>{

    await page.goto("https://automationexercise.com/");
    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(page).toHaveTitle('Automation Exercise');
    await page.waitForLoadState('load');
    await expect(page.getByAltText("Website for automation practice")).toBeVisible();
    

})