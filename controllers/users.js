const ErrorResponse = require("../utils/errorResponse");
const usersRepository = require("../repositories/users");
const asyncHandler = require("../middlewares/asyncHandler");
const { addUser } = require("../queries/users");
const { createJwt } = require("../utils/jwtHelper");
const { compareWithPassword } = require("../utils/passwordHelper");

createUser = asyncHandler(async (req, res, next) => {
  const { name, username, password } = req.body;
  const users = await usersRepository.getUserByUsername(username);
  if (users && users.length > 0) {
    next(new ErrorResponse(` Username ${username} already taken`), 400);
  }
  const userId = await usersRepository.addUser(name, username, password);
  console.log("userId:", userId);
  if (userId) {
    const token = createJwt(userId);
    res.status(201).json({
      success: true,
      data: { message: "created user successfully", name: name, token: token },
    });
  }
});

loginUser = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;
  const users = await usersRepository.getUserByUsername(username);
  if (!users || users.length == 0) {
    next(new ErrorResponse(`Invalid credential`), 400);
  }
  const user = users[0];
  const isValid = compareWithPassword(password, user.password);
  if (isValid) {
    const token = createJwt(user.id);
    res.status(201).json({
      success: true,
      data: { message: "login successfull", username: username },
      token: token,
    });
  } else {
    return next(new ErrorResponse("Invalid credential",401))
  }
});

module.exports = {
  createUser,
  loginUser,
};
