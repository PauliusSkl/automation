// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { UserData } = require('../data/user-data');
const { MainPage } = require('../pages/main-page');
const { ProviderData } = require('../data/provide-data');
const { DishData } = require('../data/dish-data');

test.describe('Provider tests', () => {
  let userInfo = new UserData("admin8@sft.com", "admin781");
  let providerinfo = new ProviderData("provider8", "Green");
  let dishInfo = new DishData("5", "5", "Steak");
  let mainPage;
  test.beforeEach(async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.navigateToInitalPAge();
    await loginPage.login(userInfo);
    mainPage = new MainPage(page);
  });

  test('Add new provider with a dish', async ({ page }) => {
    await mainPage.openLuchEditTab();
    await mainPage.initiateAddingNewSupplier();
    await mainPage.addNewSupplier(providerinfo);
    await mainPage.addMainDish(dishInfo);
    let added = await mainPage.checkIfProviderIsAdded(providerinfo);
    expect(added).toBe(true);
  });
});

 test.describe('Ordering tests', () => {
  let loginPage;
  let userInfo = new UserData("paulius.skliaudys@sft.com", "tester137");
  let providerinfo = new ProviderData("provider8", "Green");
  let dishInfo = new DishData("5", "5", "Steak");
  let mainPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToInitalPAge();
  });

test("Make a order", async ({ page }) => {
  await loginPage.login(userInfo);
  mainPage = new MainPage(page);
  await mainPage.selectProvider(providerinfo);

  await mainPage.addDish(dishInfo);
  await mainPage.confirmOrder();
});
});




   // await page.click('input[aria-label="Selected Date"]');
    // await page.pause();
    // const dayElement = await page.$('.v-btn__content:has-text("30")');
    // if (dayElement) {
    //     await dayElement.click();
    // }
    // await page.pause();