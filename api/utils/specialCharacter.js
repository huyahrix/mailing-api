/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/09/23 11:20
 * @update 2019/09/23 11:20
 */
'use strict';
const regex = /[^\w\s-/]/gi;
const specialCharacter = {
    isInvalid: (value) => {
        sails.log.info(`===== specialCharacter.isInvalid => ${value} =====`);
        return regex.test(value);
        // return false;
    },
    // Key Format = ABC-DEF-GHI
    isKey: (value) => {
        const keyRegex = /[^\w\s-]/gi;
        return keyRegex.test(value);
    },
    remove: (value) => {
        if( value ){
            return value.replace( regex , '');
        }
    }
};
module.exports = specialCharacter;
