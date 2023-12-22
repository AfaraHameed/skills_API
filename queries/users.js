const createUser = 'INSERT INTO users (name,username,password) VALUES ($1,$2,$3) RETURNING id'
const getUserByUsername ='SELECT id,name,username FROM users WHERE username=$1 '

module.exports={
    createUser,
    getUserByUsername
}