import { $ } from '@wdio/globals'
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
}

export default new SecurePage();