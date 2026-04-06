import { $ } from '@wdio/globals'
import Page from './page.js';
import securePage from './secure.page.js';

class CartPage extends Page {

    get checkoutButton () {
        return $('#checkout')
    }

    get continueShoppingButton () {
        return $('#continue-shopping')
    }

    get checkoutContinue () {
        return $('#continue');
    }

    async deleteLight () {
        securePage.removeCartLight.waitForClickable();
        securePage.removeCartLight.click();
    }

    async deleteBackpack () {
        securePage.removeCartBackpack.waitForClickable();
        securePage.removeCartBackpack.click();
    }

    async deleteTshirt () {
        securePage.removeCartTshirt.waitForClickable();
        securePage.removeCartTshirt.click();
    }

    async deleteOnsie () {
        securePage.removeCartOnsie.waitForClickable();
        securePage.removeCartOnsie.click();
    }

    async deleteJacket () {
        securePage.removeCartJacket.waitForClickable();
        securePage.removeCartJacket.click();
    }

    async deleteLongRedSleeve () {
        securePage.removeCartLongRed.waitForClickable();
        securePage.removeCartLongRed.click();
    }

    async openCheckout () {
        this.checkoutButton.waitForClickable();
        this.checkoutButton.click();
    }

    async openBacktoShopping () {
        this.continueShoppingButton.waitForClickable();
        this.continueShoppingButton.click();
    }

    
}

export default new CartPage();