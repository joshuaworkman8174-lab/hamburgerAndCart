import { browser, expect } from '@wdio/globals'
import Webpage from '../pageobjects/page.js';
import loginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import page from '../pageobjects/page.js';

describe('The Swag Labs website', () => {
    it('can open and close the burger menu', async () => {
        await loginPage.open ()
        await expect(loginPage.mainMenuLogo.toExist());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await browser.pause(1000);
        await securePage.burgerButton.click();
        await browser.pause(500);
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerX.click();
        await browser.pause(500);
    });

    it('open links from the burger menu', async () => {
        await securePage.burgerButton.click();
        await browser.pause(500);
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItems.click();
        await browser.pause(500);
        await securePage.backpackPage.click();
        await browser.pause(500);
        await expect(securePage.backToProducts.isDisplayed());
        await securePage.burgerButton.click();
        await browser.pause(500);
        await securePage.burgerItems.click();
        await expect(securePage.titleProducts.isDisplayed());
        await securePage.burgerButton.click();
        await securePage.burgerAbout.click();
        await expect(securePage.navBarAbout.isDisplayed());
        await browser.back();
        await expect(securePage.titleProducts.isDisplayed());
        await browser.pause(500);
        await securePage.burgerButton.click();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerLogout.click();
        await expect(loginPage.mainMenuLogo.toExist());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        

    })
});