import { browser, expect } from '@wdio/globals'
import Webpage from '../pageobjects/page.js';
import loginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import page from '../pageobjects/page.js';

describe('The hamburger menu', () => {
    it('can open and close', async () => {
        await loginPage.open ()
        await expect(loginPage.mainMenuLogo.toExist());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await browser.pause(1000);
        await securePage.burgerButton.click();
        await browser.pause(1000);
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerX.click();
        await browser.pause(2000);
    });

    it('and the menue links work', async () => {
        await securePage.burgerButton.click();
        await browser.pause(1000);
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItems.click();
        await browser.pause(1000);
        await securePage.backpackPage.click();
        await browser.pause(1000);
        await expect(securePage.backToProducts.isDisplayed());
    })
});