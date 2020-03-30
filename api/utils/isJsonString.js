/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';

const isJsonString = (str) => {
    str = typeof str !== 'string' ? JSON.stringify(str) : str;
    try {
        str = JSON.parse(str);
    } catch (e) {
        if( e ){
            return false;
        }
        // sails.log.info('catch', e );
    }

    if (typeof str === 'object' && str !== null) {
        return true;
    }

    return false;
};

module.exports = isJsonString;
