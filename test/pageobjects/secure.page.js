import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {
    
    get showMeSomething () {
        return $('#shopping_cart_container > a');
    }

    get productsLogo () {
        return $('.app_logo');
    }

    get burgerButton () {
        return $('#react-burger-menu-btn');
    }

    get burgerX () {
        return $('#react-burger-cross-btn');
    }

    get burgerItems () {
        return $('#inventory_sidebar_link');
    }

    get burgerAbout () {
        return $('#about_sidebar_link');
    }

    get burgerLogout () {
        return $('#logout_sidebar_link');
    }

    get burgerReset () {
        return $('#reset_sidebar_link');
    }

    get cartContinue () {
        return $('#continue-shopping');
    }

    get cartCheckout () {
        return $('#checkout');
    }

    get cartIconNumber () {
        return $('.shopping_cart_badge');
    }

    get addCartBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get addCartLight () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get addCartTshirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get addCartJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get addCartOnsie () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get backpackPage () {
        return $('#item_4_title_link > div');
    }

    get backToProducts () {
        return $('#back-to-products');
    }

    get titleProducts () {
        return $('#header_container > div.header_secondary_container > span');
    }

    get navBarAbout () {
        return $('#__next > div.MuiBox-root.css-1u9jaw6 > header > div');
    }

    async burgerOpen () {
        this.burgerButton.waitForClickable();
        this.burgerButton.click();
    }

    async burgerClose () {
        this.burgerX.waitForClickable();
        this.burgerX.click();
    }

    async burgerItemsSelect () {
        this.burgerItems.waitForClickable();
        this.burgerItems.click();
    }

    async burgerAboutSelect () {
        this.burgerAbout.waitForClickable();
        this.burgerAbout.click();
    }

    async burgerResetApp () {
        this.burgerReset.waitForClickable();
        this.burgerReset.click(); 
    }

    async productAddOnsie () {
        this.addCartOnsie.waitForClickable();
        this.addCartOnsie.click();
    }

    async openBackpackPage () {
        this.backpackPage.waitForClickable();
        this.backpackPage.click();
    }

}

export default new SecurePage();