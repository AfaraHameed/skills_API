const createUser = 'INSERT INTO users (name,username,password) VALUES ($1,$2,$3) RETURNING id'
const getUserByUsername ='SELECT id,name,username,password FROM users WHERE username=$1 '
const getUserByUserId ='SELECT id,name,username,password FROM users WHERE id=$1 '
const getRolesByUserId = 'SELECT r.name FROM role r INNER JOIN userrole ur on ur.roleid=r.id WHERE ur.userid=$1'


module.exports={
    createUser,
    getUserByUsername,
    getUserByUserId,
    getRolesByUserId
}