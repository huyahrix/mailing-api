/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/05/28 11:15
 * @update 2019/05/28 11:15
 */
'use strict';

/**
 * input:
 * - hour: "21:47
 * output:
 * - minutes: 123
 * */
const stringToMinutes = (hour) => {

    if(!hour || hour.length < 2) {
        return 0;
    }

    let arr = hour.split(':');
    let h = parseInt(arr[0], 10);
    let m = parseInt(arr[1], 10);

    return h * 60 + m;
};

module.exports = stringToMinutes;
