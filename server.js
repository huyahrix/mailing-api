/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:07:35
 * @Last Modified by:   huyahrix
 * @Last Modified time: 2019-11-15 11:07:35
 * @Description: Description
 */

var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});