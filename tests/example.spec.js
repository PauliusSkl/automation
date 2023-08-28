// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { UserData } = require('../data/user-data');
const { MainPage } = require('../pages/main-page');
test('login test', async ({ page }) => {
  let userInfo = new UserData("admin8@sft.com", "admin781");
  
  let loginPage = new LoginPage(page);
  await loginPage.navigateToInitalPAge();
  await loginPage.login(userInfo);
});


test.describe('Lunch edit tests', () => {
  let userInfo = new UserData("admin8@sft.com", "admin781");
  let providerinfo;
  let mainPage;
  test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigateToInitalPAge();
    await loginPage.login(userInfo);
    mainPage = new MainPage(page);
  });

  test('add new supplier', async ({ page }) => {
    //on page click lunch edit
    await mainPage.openLuchEditTab();

    await mainPage.initiateAddingNewSupplier();

    // await page.waitForSelector('input[aria-label="Selected Date"]');
    
    // await page.locator('button').filter({ hasText: 'buildclose' }).click();
    // await page.locator('button').filter({ hasText: 'buildclose' }).click();
    // await page.locator('button').filter({ hasText: 'add' }).click();
    

    await page.getByRole('combobox', { name: 'Provider Name' }).click();
    await page.getByRole('combobox', { name: 'Provider Name' }).fill('testProviderrr');
    await page.getByLabel('Color', { exact: true }).click();
    await page.locator('a').filter({ hasText: 'Green' }).first().click();

    await page.getByText('delete', { exact: true }).first().click();
    await page.getByText('Pagrindiniai Patiekalai (Main Dishes)restaurant').click();
    await page.getByLabel('Price').fill('1');
    await page.getByLabel('Count').fill('1');
    await page.getByLabel('Selection Name').fill('test');
    await page.getByRole('button', { name: 'Save' }).click();

    await page.pause();

  });
});



   // await page.click('input[aria-label="Selected Date"]');
    // await page.pause();
    // const dayElement = await page.$('.v-btn__content:has-text("30")');
    // if (dayElement) {
    //     await dayElement.click();
    // }
    // await page.pause();