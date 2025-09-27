const { test, expect } = require('@playwright/test');

test('Test', async ({ page }) => {
    prod = page.getByRole('link', { name: ' Products' });
    searchProd = page.locator('[name=search]');
    searchProdBtn = page.locator('[id=submit_search]');

//  Category
    womenCate = page.locator('a', {hasText:'Women'});
    menCate = page.locator('a', {hasText:'Men'});
    KidsCate = page.locator('a', {hasText:'Kids'});
    dress = page.getByRole('link', {name:'Dress'})
    tops = page.getByRole('link', {name:'Tops'})
    saree = page.getByRole('link', {name:'Saree'})
    tshirt = page.getByRole('link', {name:'Tshirt'})
    jeans = page.getByRole('link', {name:'Jeans'})
    kDress = page.getByRole('link', {name:''})
    kTopsTshirt = page.getByRole('link', {name:''})

//  Brands
    polo = page.locator('a', {hasText:'Polo'})
    hM = page.locator('a', {hasText:'H&M'})
    madame = page.locator('a', {hasText:'Madame'})
    mastAndHarbour = page.locator('a', {hasText:'Mast & Harbour'})
    babyHug = page.locator('a', {hasText:'Babyhug'})
    allenSollyJr = page.locator('a', {hasText:'Allen Solly Junior'})
    kookieKids = page.locator('a', {hasText:'Kookie Kids'})
    biba = page.locator('a', {hasText:'Biba'})

})