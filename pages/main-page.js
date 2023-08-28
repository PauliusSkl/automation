export class MainPage {
    constructor(page) {
        this.page = page;
    }

    async openLuchEditTab() {
        await this.page.click('text="Lunch Editing"');
        await this.page.waitForLoadState("networkidle");
    }

    async initiateAddingNewSupplier() {
        await this.page.locator('button').filter({ hasText: 'buildclose' }).click();
        await this.page.locator('button').filter({ hasText: 'buildclose' }).click();
        await this.page.locator('button').filter({ hasText: 'add' }).click();
    }

    async addNewSupplier(providerInfo) {
        await this.page.getByRole('combobox', { name: 'Provider Name' }).click();
        await this.page.getByRole('combobox', { name: 'Provider Name' }).fill(providerInfo.name);
        await this.page.getByLabel('Color', { exact: true }).click();
        await this.page.locator('a').filter({ hasText: providerInfo.color }).first().click();
    }
    async addMainDish(dishInfo) {
        await this.page.getByText('delete', { exact: true }).first().click();
        await this.page.getByText('Pagrindiniai Patiekalai (Main Dishes)restaurant').click();
        await this.page.getByLabel('Price').fill(dishInfo.price);
        await this.page.getByLabel('Count').fill(dishInfo.count);
        await this.page.getByLabel('Selection Name').fill(dishInfo.name);
        await this.page.getByRole('button', { name: 'Save' }).click();
    }
    async checkIfProviderIsAdded(providerInfo) {
        let providerAdded = await this.page.waitForSelector(`text="${providerInfo.name}"`);

        if(providerAdded){
            return true;
        }
    }

    async selectProvider(providerInfo) {
        await this.page.locator(`text=${providerInfo.name}`).first().click();
    }

    async addDish(dishInfo) {
        await this.page.locator(`div[class*="dish-card"] > div:has-text("${dishInfo.name}")`).first().click();
    }
    async confirmOrder() {
        await this.page.locator('div[class="v-btn__content"] > span:has-text("€")').click();
    }
}