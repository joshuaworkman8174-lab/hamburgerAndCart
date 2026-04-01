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
        await securePage.burgerOpen ();
        await browser.pause(500);
        await expect(securePage.burgerX.isDisplayed());
        await browser.pause(500);
        await securePage.burgerClose ();
        await browser.pause(500);
    });

    it('open links from the burger menu', async () => {
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItemsSelect ();
        await securePage.openBackpackPage ();
        await expect(securePage.backToProducts.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItemsSelect ();
        await expect(securePage.titleProducts.isDisplayed());
        await securePage.burgerOpen ();
        await securePage.burgerAboutSelect ();
        await expect(securePage.navBarAbout.isDisplayed());
        await browser.back ();
        await expect(securePage.titleProducts.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await loginPage.burgerLogoutSelect ();
        await expect(loginPage.mainMenuLogo.isDisplayed());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await securePage.productAddOnsie ();
        await expect(securePage.cartIconNumber.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerResetApp ();
    })
});