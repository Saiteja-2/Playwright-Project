import {test, expect} from '@playwright/test';

test('open sauce', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByText('Products')).toBeVisible();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await page.getByRole('button', {name:'Checkout'}).click();

    await page.getByPlaceholder('First Name').fill('Saiteja');
    await page.getByPlaceholder('Last Name').fill('Kongani');
    await page.getByPlaceholder('Zip/Postal Code').fill('516360');
    await page.getByRole('button', {name:'Continue'}).click();
    await page.getByRole('button', {name:'Finish'}).click();

    await page.getByRole('button', {name:'Generate PDF order'}).click();
});
