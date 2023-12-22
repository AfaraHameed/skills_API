var bcrypt = require("bcrypt");
var salt = bcrypt.genSaltSync(10);

function hashPassword(password) {
  var hash = bcrypt.hashSync(password, salt);
  return hash;
}

module.exports = { hashPassword };
