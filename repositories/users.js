const usersQueries = require("../queries/users");
const pool = require("../config/db");

addUser = (name,username,password)=>{
    return new Promise((resolve,reject)=>{
      pool.query(usersQueries.createUser, [name,username,password], (error, result) => {
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