/*
 * @Author: huyahrix
 * @Email: infjnite@gmail.com
 * @Date: 2019-11-15 11:07:19
 * @Last Modified by:   huyahrix
 * @Last Modified time: 2019-11-15 11:07:19
 * @Description: Description
 */

var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');