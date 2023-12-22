const ErrorResponse = require("../utils/errorResponse");
const usersRepository = require("../repositories/users");
const asyncHandler = require("../middlewares/asyncHandler");
const { addUser } = require("../queries/users");
const {createJwt} = require("../utils/jwtHelper")

createUser = asyncHandler(async (req, res, next) => {
    const { name , username , password } = req.body;
    const users = await usersRepository.getUserByUsername(username)
    if(users && users.length>0){
      next(new ErrorResponse(` Username ${username} already taken`),400)
    }
    const userId = await usersRepository.addUser(name,username,password);
    console.log("userId:",userId);
    if (userId) {
      const token = createJwt(userId)
      res.status(201).json({
        success: true,
        data: { message: "created user successfully" ,name:name,token:token},
      });
    }
  });

  module.exports = {
    createUser
  }