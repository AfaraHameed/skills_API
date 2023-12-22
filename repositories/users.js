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
          console.log(result.rows)
          const userId = result.rows ? result.rows[0].id:undefined
          resolve(userId)
        }
    })
  
  })
  }

 getUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
      pool.query(usersQueries.getUserByUsername, [username], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.rows);
        }
      });
    });
  };

  module.exports = {
    addUser,
    getUserByUsername
  }