import { browser } from '@wdio/globals'

export default class Webpage {

    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}


export const usernameList = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];