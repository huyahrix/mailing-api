// /**
//  * @copyright 2019 © DigiNet
//  * @author hoangtuan
//  * @create 2019/11/06 15:32
//  * @update 2019/11/06 15:32
//  */
// 'use strict';

// const XLSX          = require('xlsx');
// const checkFile     = require('./checkFile');
// const request       = require('request');
// // positionHeader is position begin read.Ex: A6
// const readExcel = {
//     // Get work sheet by path. Ex: /home/temp.xlsx
//     getWorksheet: async(filePath) => {
//         const canRead           = await checkFile.canRead(filePath);
//         if( !canRead ){
//             return false;
//         }
//         const workbook          = XLSX.readFile(filePath);
//         const firstSheetName    = workbook.SheetNames[0];
//         return workbook.Sheets[firstSheetName];
//     },
//     /*
//     * fileUrl: Template excel url. Ex: http://localhost:6035/uploads/2019/11/db6143aa-0b1d-40d2-b7d6-88a730c160b8.xlsx
//     * beginRow: Get from DB, begin row in excel. Ex: 6
//     * standardColumn: Get from DB, begin column in excel. Ex: 'A'
//     */
//     getWorksheetByUrl: async( fileUrl, beginRow, standardColumn ) => {
//         return new Promise((resolve, reject) => {
//             if( !fileUrl ){
//                 return reject({error:'EXCEL001',message:`Can't find url`});
//             }
//             if( !beginRow || !standardColumn ){
//                 return reject({error:'EXCEL002',message:`BeginRow or StandardColumn is required`});
//             }
//             request({url: fileUrl, encoding:null} , function (error, response, body) {
//                 if( error ){
//                     return reject(error);
//                 }
//                 // console.log('error:', error); // Print the error if one occurred
//                 console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//                 const workbook          = XLSX.read(body, {type: 'array'});
//                 const firstSheetName    = workbook.SheetNames[0];
//                 const worksheet         = workbook.Sheets[firstSheetName];
//                 const resultConvert    = readExcel.convertToTable(worksheet,beginRow ,standardColumn);
//                 return resolve(resultConvert);
//             });
//         });
//     },
//     convertToTable: async(worksheet, beginRow, standardColumn) => {
//         if( !worksheet || !beginRow || !standardColumn ){
//             return false;
//         }
//         let result      = {header:[],body:[]};
//         let rowNum;
//         let colNum;
//         let range       = XLSX.utils.decode_range(worksheet['!ref']);
//         sails.log.info(`range`,range);
//         for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
//             let body    = [];
//             for(colNum=range.s.c; colNum<=range.e.c; colNum++){
//                 let nextCell = worksheet[XLSX.utils.encode_cell({r: rowNum, c: colNum})];
//                 if(  typeof nextCell !== 'undefined'  ){
//                     if( rowNum === ( beginRow - 2 ) ){
//                         // header.push(nextCell.w);
//                         result.header.push(nextCell.w);
//                     }else if( rowNum >= beginRow ){
//                         body.push(nextCell.w);
//                     }
//                 }
//             }
//             if( body.length > 0 ){
//                 result.body.push(body);
//             }
//         }
//         return {'header':result.header,'body':result.body};
//     },
// };

// module.exports = readExcel;
