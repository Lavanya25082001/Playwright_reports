// @ts-check
const { test, expect } = require('@playwright/test');

test('Test-1::playwright dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Test-2::opencart', async ({ page }) => {
  await page.goto('https://demo.opencart.com/');
  await expect(page).toHaveTitle('Your Store');
 
});

test('Test-3::nopcommerce', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/');
  await expect(page).toHaveTitle('nopCommerce demo store');
});
test('Test-4::playwright dev', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle('Playwrigh');
});

test('Test-5::herokuapp', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page).toHaveTitle('The Internet');
});

test('Test-6::applitools', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await expect(page).toHaveTitle('ACME Demo App by Applitools');
});

test('Test-7::parabank', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');
  await expect(page).toHaveTitle('ParaBank | Welcome | Online Banking');
});

test('Test-8::saucedemo', async ({ page }) => {
  await page.goto('https://saucedemo.com/');
  await expect(page).toHaveTitle('Swag Labs');
});

test('Test-9::ultimateqa', async ({ page }) => {
  await page.goto('https://ultimateqa.com/');
  await expect(page).toHaveTitle('Homepage - Ultimate QA');
});

test('Test-10::webdriveruniversity ', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/');
  await expect(page).toHaveTitle('WebDriverUniversity.com');
});

test('Test-11::demoqa ', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveTitle('DEMOQA');
});
