import { browser, expect } from '@wdio/globals'
import Webpage from '../pageobjects/page.js';
import loginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import page from '../pageobjects/page.js';

describe('The hamburger menu', () => {
    it('should open and close', async () => {
        await loginPage.open ()
        await expect(loginPage.mainMenuLogo.toExist())
        await loginPage.login ('standard_user', 'secret_sauce')
        await expect(securePage.productsLogo.toExist())

    });
});