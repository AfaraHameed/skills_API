const { verifyToken } = require("../utils/jwtHelper");
const { getRolesByUserId } = require("../repositories/users");
const verifyTokenHandler = async (req, res, next) => {
  let token = req.headers["authorization"];
  console.log("token", token);
  if (token && token.includes("Bearer")) {
    try {
      const result = await verifyToken(token);
      const userId = result.userId;
      req.userid = userId;
      return next();
    } catch (error) {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    console.log("No token provided");
    res.status(400).json({ message: "No token provided" });
  }
};
const verifyRole = (roles) => {
  return async (req, res, next) => {
    const userid = req.userid;
    const userRoles = await getRolesByUserId(userid);
    let hasRole = false;
    console.log(userRoles);
    for (let userRole of userRoles) {
      if (roles.includes(userRole.name)) {
        hasRole = true;
        break;
      }
    }
    console.log("hasrole", hasRole);
    if (hasRole) next();
    else res.status(403).json("You don't have permission");
  };
};

module.exports = {
  verifyTokenHandler,
  verifyRole,
};
