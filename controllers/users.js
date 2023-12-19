const ErrorResponse = require("../utils/errorResponse");
const usersRepository = require("../repositories/users");
const asyncHandler = require("../middlewares/asyncHandler");
const { addUser } = require("../queries/users");

createUser = asyncHandler(async (req, res, next) => {
    const { name , username , password } = req.body;
    const created = await usersRepository.addUser(name,username,password);
    if (created) {
      res.status(201).json({
        success: true,
        data: { message: "created user successfully" },
      });
    }
  });

  module.exports = {
    createUser
  }