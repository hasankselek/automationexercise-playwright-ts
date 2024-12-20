import { Page, Locator, expect } from '@playwright/test';

export class CommonSteps {
  private page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async clickWithText(text: string): Promise<void> {
    const element = this.page.locator(`text=${text}`);
    await element.click();
  }

  async verifyTextVisible(text: string): Promise<void> {
    const element = this.page.locator(`text=${text}`);
    await expect(element).toBeVisible();
  }

  async verifyNavigateExpectedPage(expectedUrl : string):Promise<void> {
    const expectedHomePageUrl = expectedUrl;
    const actualHomePageUrl = await this.page.url();
    await expect(actualHomePageUrl).toBe(expectedHomePageUrl);
  }
}