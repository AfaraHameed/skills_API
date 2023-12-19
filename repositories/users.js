const usersQueries = require("../queries/users");
const pool = require("../config/db");
const {hashPassword} = require('../utils/passwordHelper');

addUser = (name,username,password)=>{
    const hashedPassword = hashPassword(password)
    return new Promise((resolve,reject)=>{
      pool.query(usersQueries.createUser, [name,username,hashedPassword], (error, result) => {
        if(error){
          reject(error)
        }
        else{
          resolve(true)
        }
    })
  
  })
  }

  module.exports = {
    addUser
  }