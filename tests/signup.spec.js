const {test, expect} = require('@playwright/test');
const Signup = require('../page/Signup');

test('Login', async({page})=>{
     
    const signObj = new Signup(page);
    await signObj.signUp();
    
})