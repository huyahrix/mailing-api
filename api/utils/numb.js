/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/04/15 16:40
 * @update 2019/04/15 16:40
 */
'use strict';

const isInt = (val) => {
    if(!val || val.length === 0) {
        return false;
    }

    let regex = /^[1-9]\d*$/g;

    return regex.test(val);
};

const intLimit = (val, min, max) => {
    if( !isInt(val) ) {
        return false;
    }

    min = min ? min : Number.MIN_VALUE;
    max = max ? max : Number.MAX_VALUE;

    if(parseInt(val) > max) {
        return false;
    }

    if(parseInt(val) < min) {
        return false;
    }

    return true;
};

module.exports = {
    isInt: isInt,
    intLimit: intLimit
};
