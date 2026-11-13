// import {test, expect} from '@playwright/test';

// test('open the playwrightwebsite', async({page}) =>{
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);

// })

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


import {test, expect} from '@playwright/test';

test('heading validation', async({page})=>
{
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('heading', {name: /Playwright enables reliable/})).toBeVisible(); });

test('Verify the URL contains /docs/intro', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await expect(page).toHaveURL(/\/docs\/intro/);
});

test('Verify the Installation heading is visible & Verify the page title contains Playwright.', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify the Installation heading is visible.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  // Verify the page title contains Playwright.
  await expect(page).toHaveTitle(/Playwright/);
});