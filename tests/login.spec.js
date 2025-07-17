const {test, expect} = require('@playwright/test');

const Login = require('../page/Login');
test('Login', async({page})=>{
     
    const loginObj = new Login(page);
    await loginObj.login();
    
})