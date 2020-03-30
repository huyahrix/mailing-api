/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';
/**
 * @param {Number} length   Number type
 * @param {string} chars    String type
 */
const randString = (length, chars) => {
    // let text = '';
    // const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // n = n > 0 ? n : 5;
    // for( let i=0; i < n; i++ ) {
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    // }
    // return text;
    let mask = '';
    if (chars.indexOf('a') > -1) {mask += 'abcdefghijklmnopqrstuvwxyz';}
    if (chars.indexOf('A') > -1) {mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';}
    if (chars.indexOf('#') > -1) {mask += '0123456789';}
    if (chars.indexOf('!') > -1) {mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';}
    let result = '';
    for (var i = length; i > 0; --i) {result += mask[Math.floor(Math.random() * mask.length)];}
    return result;
};

module.exports = randString;
