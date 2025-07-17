const { test, expect } = require('@playwright/test');

test('Test', async ({ page }) => {
    prod = page.getByRole('link', { name: ' Products' });
    searchProd = page.locator('[name=search]');
    searchProdBtn = page.locator('[id=submit_search]');
    
})