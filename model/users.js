var mongoose = require('mongoose');

exports.userlist = function userlist(callback) {
  var User = mongoose.model('User');
  User.find(function(err, users) {
    if(err) {
      console.log(err);
    } else {
      console.log(users);
      callback("", users);
    }
  });
};