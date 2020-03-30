/**
 * @copyright 2018 @DiginetCorp
 * @author hoangtuan
 * @create 2018/09/24 09:46
 * @update 2018/09/24 09:46
 */
'use strict';
const moment = require('moment');
const dateTime = {
    check: (date, format = ['YYYY-MM-DD','YYYY-MM-DD HH:mm:ss.SSS','MM/DD/YYYY'] ) =>{
        if( moment(date,format, true).isValid()){
            return true;
        }
        return false;
    },
    formatToDate: (date, lastDay = false) => {
        if( dateTime.check(date) ){
            // Với trường hợp DateFrom <= 2019-08-31, trong DB là 2019-08-31 15:11:22.123
            // thì cẩn phải xác định thời gian là cuối ngày để trả về kết quả đúng
            if( lastDay === true ){
                return moment(date).add(1,'days').subtract(2,'milliseconds').format('YYYY-MM-DD HH:mm:ss.SSS');
            }
            return moment(date).format('YYYY-MM-DD');
        }
    },
    formatToTime: (date, lastDay = false ) => {
        if( dateTime.check(date) ){
            const formatDate = dateTime.formatToDate(date, lastDay );
            return moment(formatDate).format('X');
        }
    },
    compare: (dateFrom, dateTo) => {
        if( dateTime.check(dateFrom) && dateTime.check(dateTo)){
            const timeFrom  = dateTime.formatToTime(dateFrom);
            const timeTo    = dateTime.formatToTime(dateTo, true );
            if( timeFrom <= timeTo){
                return true;
            }
        }
        return false;
    },
    /* format string of date from MM/DD/YYYY -> YYYY-MM-DD */
    convertDateString: (date) => {
        let arrSplit = [];
        const reg = /[01][0-9]\/[0-3][0-9]\/\d\d\d\d/g;
        let strConverted = '';
        if(reg.test(date) === true) {
            if (date) {
                arrSplit = date.split('/');
            }
            if (arrSplit.length === 3) {
                const dd = arrSplit[1];
                const mm = arrSplit[0];
                const yyyy = arrSplit[2];
                strConverted = ([yyyy, mm, dd]).join('-');
                return strConverted;
            }
        }
        return false;
    }
};
module.exports = dateTime;
