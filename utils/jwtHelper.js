var jwt = require("jsonwebtoken");
var SECRET = "upcode123";
function createJwt(userId) {
  var token = jwt.sign({ useId: userId }, SECRET);
  return token;
}

function verifyToken(token) {
  //replace Bearer(one space too)
  const formattedToken = token.replace("Bearer ", "");
  console.log("formatted token", formattedToken);
  return new Promise((resolve, reject) => {
    jwt.verify(formattedToken, SECRET, (err, decoded) => {
      if (err) {
        reject({ valid: false, error: err });
      } else {
        console.log("resolved");
        return resolve({ valid: true, userid: decoded.userid });
      }
    });
  });
}
module.exports = {
  createJwt,
  verifyToken,
};
