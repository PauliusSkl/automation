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

    async addNewSupplier() {
        //anchor tag with span adding one. clicks it
        
        await this.page.click('text="adding one."');

        
        // if (await this.page.isVisible('adding one."')) {
        //     await this.page.click('text="adding one."');
        // }
        // await this.page.click('text="adding one."');
        // await this.page.waitForLoadState("networkidle");
    }
}