/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/06/24 15:46
 * @update 2019/06/24 15:46
 */
'use strict';
const isJsonString = require('./isJsonString');
const convertStr = (arr, doubleCommas ) => {
    if ( !arr || arr.length === 0 || !isJsonString(arr) || arr.indexOf('%') >= 0  ) {
        return '';
    }
    arr = JSON.parse( arr );
    if( typeof arr === 'string' || typeof arr === 'number' ){
        return '';
    }
    if( doubleCommas === false ){
        const result = arr.map(item => {
            if (item === '%' ) {
                return '';
            }
            return item;
        });
        return `'`+result.join(`,`)+`'`;
    }else{
        const result = arr.map(item => {
            if (item === '%' ) {
                return '';
            }

            return `'` + item + `'`;
        });
        return result.join(`,`);
    }


};


module.exports = convertStr;
