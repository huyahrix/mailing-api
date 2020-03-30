/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';

let parseTimeToSecond = (strTime) => {

    let result = 0;
    let asp = strTime.split(' ');
    let arr = asp[0].split(':');

    if (arr[0] < 12) {
        result = arr[0] * 3600; // hours
    }

    result += arr[1] * 60; // minutes
    result += arr[2] ? parseInt(arr[2]) : 0; // seconds

    if (strTime.indexOf('P') > -1) {  // 8:00 PM > 8:00 AM
        result += 43200;
    }

    return result;
};

module.exports = parseTimeToSecond;
