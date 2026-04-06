import { browser, expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';

import cartPage from '../pageobjects/cart.page.js';

describe('The Swag Labs website', () => {
    it('can open and close the burger menu', async () => {
        await loginPage.open ();
        await expect(loginPage.mainMenuLogo.toExist());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerClose ();
    });

    it('opens links from the burger menu', async () => {
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItemsSelect ();
        await securePage.openBackpackPage ();
        await expect(securePage.backToProducts.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerItemsSelect ();
        await expect(securePage.titleProducts.isDisplayed());
        await securePage.productAddOnsie ();
        await expect(securePage.cartIconNumber.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerResetApp ();
        await expect(await securePage.cartIconNumber.isDisplayed()).toBe(false);
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await loginPage.burgerLogoutSelect ();
        await expect(loginPage.mainMenuLogo.toBeDisplayed());
        await loginPage.open ();
        await expect(loginPage.loginButton.toBeDisplayed());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await securePage.burgerOpen ();
        await expect(securePage.burgerX.isDisplayed());
        await securePage.burgerAboutSelect ();
        await expect(securePage.navBarAbout.waitForDisplayed());
        await browser.execute(() => {
            window.stop();
        });
    })

    it('adds products to the cart, views them, then delete them', async () => {
        await loginPage.open ();
        await expect(loginPage.loginButton.isDisplayed());
        await loginPage.login ('standard_user', 'secret_sauce');
        await expect(securePage.burgerButton.isDisplayed());
        await securePage.productAddJacket ();
        await expect(securePage.removeCartJacket.isDisplayed());
        await securePage.productAddLight ();
        await expect(securePage.removeCartLight.isDisplayed());
        await securePage.productAddBackpack ();
        await expect(securePage.removeCartBackpack.isDisplayed());
        await securePage.productAddTshirt ();
        await expect(securePage.removeCartTshirt.isDisplayed());
        await securePage.productAddOnsie ();
        await expect(securePage.removeCartOnsie.isDisplayed());
        await securePage.openRedShirt ();
        await expect(securePage.backToProducts.isDisplayed());
        await securePage.productAddRedShirt ();
        await expect(securePage.cartIconSix.isDisplayed());
        await securePage.openCart ();
        await expect(cartPage.checkoutButton.isDisplayed());
        await cartPage.deleteJacket ();
        await expect(await securePage.removeCartJacket.isDisplayed()).toBe(false);
        await cartPage.deleteLight ();
        await expect(await securePage.removeCartLight.isDisplayed()).toBe(false);
        await cartPage.deleteBackpack ();
        await expect(await securePage.removeCartBackpack.isDisplayed()).toBe(false);
        await cartPage.deleteTshirt ();
        await expect(await securePage.removeCartTshirt.isDisplayed()).toBe(false);
        await cartPage.deleteOnsie ();
        await expect(await securePage.removeCartOnsie.isDisplayed()).toBe(false);
        await securePage.openRedShirt ();
        await expect(securePage.removeCartLongRed.isDisplayed());
        await cartPage.deleteLongRedSleeve ();
        await expect(securePage.normalCartIcon.isDisplayed());
    })

    it('has functional return and checkout buttons in the cart', async () => {
        await securePage.pressBackToProducts ();
        await expect(securePage.titleProducts.isDisplayed());
        await securePage.productAddJacket ();
        await expect(securePage.removeCartJacket.isDisplayed());
        await securePage.productAddOnsie ();
        await expect(securePage.removeCartOnsie.isDisplayed());
        await securePage.openCart ();
        await expect(cartPage.continueShoppingButton.isDisplayed());
        await cartPage.openCheckout ();
        await expect(cartPage.checkoutContinue.isDisplayed());
        await browser.back ();
        await cartPage.openBacktoShopping ();
        await expect(securePage.showMeSomething.isDisplayed());
    })
});