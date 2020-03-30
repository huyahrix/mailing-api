/**
 * @copyright 2019 © DigiNet
 * @author rocachien
 * @create 2019/02/06 19:21
 * @update 2019/02/06 19:21
 */
'use strict';

const isDateISO = (isoDate) => {
    return (new Date(isoDate)) && !isNaN(new Date(isoDate));
};

module.exports = isDateISO;
