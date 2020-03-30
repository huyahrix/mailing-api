/**
 * @copyright 2018 @ Spirit Labs
 * @author kimlong
 * @create 2018/02/07 16:08
 * @update 2018/02/07 16:08
 */
'use strict';


exports.sqlString = (str) => {
    str = String(str);
    str= str.split(`'`).join(`''`);
    return str;
};

exports.sqlDatetime = (date) => {
    const moment = require('moment');
    const d = moment(date).format('YYYY-MM-DD HH:mm:ss.SSS');
    return d;
};

exports.formatParam = (arrField) => {
    return arrField.map( function(item){
        return '@'+item;
    }).join(',');
};
