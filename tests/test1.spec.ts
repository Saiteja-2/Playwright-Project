import {test, expect} from "@playwright/test";

test('sauce test 1', async  ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
});