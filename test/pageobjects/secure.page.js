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

    get removeCartOnsie () {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get addCartTshirt () {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt');
    }

    get addCartJacket () {
        return $('#add-to-cart-sauce-labs-fleece-jacket');
    }

    get addCartLongRed () {
        return $('#add-to-cart')
    }

    get redShirtPage () {
        return $('#item_3_title_link > div')
    }

    get removeCartJacket () {
        return $('#remove-sauce-labs-fleece-jacket')
    }

    get addCartOnsie () {
        return $('#add-to-cart-sauce-labs-onesie');
    }

    get removeCartBackpack () {
        return $('#remove-sauce-labs-backpack');
    }

    get removeCartLight () {
        return $('#remove-sauce-labs-bike-light');
    }

    get removeCartTshirt () {
        return $('#remove-sauce-labs-bolt-t-shirt');
    }

    get removeCartLongRed () {
        return $('#remove');
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

    get cartIconSix () {
        return $('#shopping_cart_container > a > span');
    }

    get normalCartIcon () {
        return $('#shopping_cart_container > a')
    }

    get productButtons() {
        return [
            this.addCartBackpack,
            this.addCartJacket,
            this.addCartLight,
            this.addCartOnsie,
            this.addCartTshirt,
        ];
    }

    async burgerOpen () {
        this.burgerButton.waitForClickable({timeout: 5000});
        this.burgerButton.click();
    }

    async burgerClose () {
        this.burgerX.waitForClickable({timeout: 5000});
        this.burgerX.click();
    }

    async burgerItemsSelect () {
        this.burgerItems.waitForClickable({timeout: 5000});
        this.burgerItems.click();
    }

    async burgerAboutSelect () {
        this.burgerAbout.waitForClickable({timeout: 5000});
        this.burgerAbout.click();
    }

    async burgerResetApp () {
        this.burgerReset.waitForClickable({timeout: 5000});
        this.burgerReset.click(); 
    }

    async productAddOnsie () {
        this.addCartOnsie.waitForClickable({timeout: 5000});
        this.addCartOnsie.click();
    }

    async productAddJacket () {
        this.addCartJacket.waitForClickable({timeout: 5000})
        this.addCartJacket.click();
    }

    async openBackpackPage () {
        this.backpackPage.waitForClickable({timeout: 5000});
        this.backpackPage.click();
    }

    async openCart () {
        this.showMeSomething.waitForClickable({timeout: 5000});
        this.showMeSomething.click();
    }

    async openRedShirt (){
        this.redShirtPage.waitForClickable({timeout: 5000});
        this.redShirtPage.click();
    }

    async productAddRedShirt () {
        this.addCartLongRed.waitForClickable({timeout: 5000});
        this.addCartLongRed.click();
    }

    async productAddTshirt () {
        this.addCartTshirt.waitForClickable({timeout: 5000});
        this.addCartTshirt.click();
    }

    async productAddLight () {
        this.addCartLight.waitForClickable({timeout: 5000});
        this.addCartLight.click();
    }

    async productAddBackpack () {
        this.addCartBackpack.waitForClickable({timeout: 5000});
        this.addCartBackpack.click();
    }

    async pressBackToProducts () {
        this.backToProducts.waitForClickable();
        this.backToProducts.click();
    }
    
    async wildButtons () {
        const buttons = this.productButtons;
        const numberOfClicks = Math.floor(Math.random() * buttons.length) + 1;
        
        for (let i = 0; i < numberOfClicks; i++) {
            const randomButtons = Math.floor(Math.random() * buttons.length);
            const button = buttons[randomButtons];
            await button.waitForClickable();
            await button.click();
        }
    }
}


export default new SecurePage();