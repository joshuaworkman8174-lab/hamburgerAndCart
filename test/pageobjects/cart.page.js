import { $, browser, expect } from '@wdio/globals'
import Page from './page.js';

class CartPage extends Page {

    get checkoutButton () {
        return $('#checkout')
    }

    get continueShoppingButton () {
        return $('#continue-shopping')
    }

    
}