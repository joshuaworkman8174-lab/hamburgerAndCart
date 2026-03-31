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
        await securePage.burgerOpenClose ();
    });

    it('open links from the burger menu', async () => {
        await securePage.burgerItemsSelect ();
        await securePage.burgerAboutSelect ();
        await loginPage.burgerLogoutSelect ();
    })
});