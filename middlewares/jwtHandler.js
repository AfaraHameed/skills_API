const { verifyToken } = require("../utils/jwtHelper");
const verifyTokenHandler = async (req, res, next) => {
  let token = req.headers["authorization"];
  console.log("token", token);
  if (token && token.includes("Bearer")) {
    try {
      const result = await verifyToken(token);
      return next();
    } catch (error) {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    console.log("No token provided");
    res.status(400).json({ message: "No token provided" });
  }
};

module.exports = {
  verifyTokenHandler,
};
