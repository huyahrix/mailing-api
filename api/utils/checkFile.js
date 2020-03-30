/**
 * @copyright 2019 © DigiNet
 * @author hoangtuan
 * @create 2019/11/05 15:07
 * @update 2019/11/05 15:07
 */
'use strict';

const fs        = require('fs');
const checkFile = {
    // Check if the file is readable.
    canRead: (filePath) => {
        return new Promise( (resolve, reject) => {
            fs.access(filePath, fs.constants.R_OK, (err) => {
                if( err ) {
                    return reject({err:'PERMISSION001',message: err});
                }
                return resolve('SUCCESS');
            });
        });
    },
    // Check if the file is writedable.
    canWrite: (filePath) => {
        return new Promise( (resolve, reject) => {
            fs.access(filePath, fs.constants.W_OK, (err) => {
                if( err ) {
                    return reject({err:'PERMISSION002',message: err});
                }
                return resolve('SUCCESS');
            });
        });
    },
};

module.exports = checkFile;
