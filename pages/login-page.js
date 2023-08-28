import { expect } from "@playwright/test";
const { UserData } = require ("../data/user-data");
export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToInitalPAge() {
    await this.page.goto("https://lunch.devbstaging.com/login-password");
    await this.page.waitForLoadState("networkidle");
  }

  async login(data) {
    await this.page.fill('input[name="email"]', data.username);
    await this.page.fill('input[name="password"]', data.password);
    //await this.page.click('[data-test="login-button"]');
    await this.page.click('button:has-text("Login")');
    await this.page.waitForLoadState("networkidle");
  }
}
