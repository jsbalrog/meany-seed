var userdata = require('../model/users');

exports.users = function(req, res) {
  var name = req.name;
  userdata.userlist(function(err, userlist) {
    res.json({
      users: userlist
    })
  });
};