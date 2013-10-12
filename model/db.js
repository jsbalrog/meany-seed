var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

mongoose.model('User', userSchema);

var db = mongoose.connect("mongodb://localhost/user-dev");