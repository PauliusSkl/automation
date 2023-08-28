const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');
const { UserData } = require('../data/user-data');
const { MainPage } = require('../pages/main-page');
const { ProviderData } = require('../data/provide-data');
const { DishData } = require('../data/dish-data');

test.describe('Provider tests', () => {
  test.describe.configure({mode: 'serial'});

  let loginPage;
  let adminInfo = new UserData("admin8@sft.com", "admin781");
  let basicUser = new UserData("paulius.skliaudys@sft.com", "tester137");
  let providerinfo = new ProviderData("provider99", "Green");
  let dishInfo = new DishData("5", "5", "Steak");
  let mainPage;
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToInitalPAge();

  });

  test('Add new provider with a dish', async ({ page }) => {
    await loginPage.login(adminInfo);
    mainPage = new MainPage(page);
    await mainPage.openLuchEditTab();
    await mainPage.initiateAddingNewSupplier();
    await mainPage.addNewSupplier(providerinfo);
    await mainPage.addMainDish(dishInfo);
    let added = await mainPage.checkIfProviderIsAdded(providerinfo);
    expect(added).toBe(true);
  });

test("Make a order", async ({ page }) => {
  await loginPage.login(basicUser);
  mainPage = new MainPage(page);
  await mainPage.selectProvider(providerinfo);
  await mainPage.addDish(dishInfo);
  await mainPage.confirmOrder();
});
});