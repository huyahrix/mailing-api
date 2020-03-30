/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';

let addZero = (i) => {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
};

module.exports = addZero;
