import { $, expect } from '@wdio/globals'
import Page from './page.js';
import { usernameList } from './page.js';
import securePage from './secure.page.js';

class LoginPage extends Page {

    get enterUsername () {
        return $('#user-name');
    }

    get person1Password () {
        return $('#password');
    }

    get loginButton () {
        return $('#login-button');
    }

    get loginError () {
        return $('#error-message-container error')
    }

    get mainMenuLogo () {
        return $('.login_logo');
    }

    async login (username, password) {
        await this.enterUsername.setValue(username);
        await this.person1Password.setValue(password);
        await this.loginButton.click ();
    }

    open () {
        return super.open('login');
    }

async loginLoop() {
            for (let i = 0; i < usernameList.length; i++) {
                await this.open();
                await this.login(usernameList[i],'secret_sauce');
                if (usernameList[i] === 'locked_out_user') {
                    await expect($('#login_button_container > div > form > div.error-message-container.error > h3')).toBeDisplayed();
                } else {
                    await expect($('#shopping_cart_container > a')).toExist();
                }
            }
        }


async falseLoop() {
    for (let i = 0; i < usernameList.length; i++) {
        await this.open();
        await this.login(usernameList[i], 'nonsense');
        await expect ($('#login_button_container > div > form > div.error-message-container.error > h3')).toBeDisplayed();
    }
}

}

export default new LoginPage();
