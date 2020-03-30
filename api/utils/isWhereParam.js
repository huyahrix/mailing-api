/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/09/05 09:39
 * @update 2019/09/05 09:39
 */
'use strict';

/*
Check where param in search function invalid: {"fieldName":"UserID","operator":"=","value":"ACB"}
With fieldName, operator, value is required
Column fieldName not [null,empty,'',undefined, not special character ( allow dot ) ]
 */
let isWhereParam = ( object ) => {
    //Parse object data to JSON
    try {
        object = JSON.parse(object);
    } catch (e) {
        if( e ){
            return false;
        }
    }
    // Convert operator to UPPERCASE, Ex: liKe to LIKE
    object.operator = object.operator.toUpperCase().trim();
    const arrOperator = ['=','<','<=','>','>=','LIKE','!='];
    if( !object.fieldName || _.isUndefined(object.fieldName) ||
        !object.operator  || _.isUndefined(object.operator)  ||
        !arrOperator.find(k => k === object.operator ) ||
        !object.value ){
        return false;
    }
    object.fieldName = object.fieldName.replace(/[^a-zA-Z0-9.]/g, '');
    return object;
};

module.exports = isWhereParam;
