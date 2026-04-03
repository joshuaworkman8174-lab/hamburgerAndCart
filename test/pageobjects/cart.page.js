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
        securePage.removeCartLight.waitForClickable({timeout: 5000});
        securePage.removeCartLight.click();
    }

    async deleteBackpack () {
        securePage.removeCartBackpack.waitForClickable({timeout: 5000});
        securePage.removeCartBackpack.click();
    }

    async deleteTshirt () {
        securePage.removeCartTshirt.waitForClickable({timeout: 5000});
        securePage.removeCartTshirt.click();
    }

    async deleteOnsie () {
        securePage.removeCartOnsie.waitForClickable({timeout: 5000});
        securePage.removeCartOnsie.click();
    }

    async deleteJacket () {
        securePage.removeCartJacket.waitForClickable({timeout: 5000});
        securePage.removeCartJacket.click();
    }

    async deleteLongRedSleeve () {
        securePage.removeCartLongRed.waitForClickable({timeout: 5000});
        securePage.removeCartLongRed.click();
    }

    
}

export default new CartPage();