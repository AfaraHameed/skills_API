const {Pool} = require('pg')
const pool = new Pool({
    user:'training_user',
    password:'upcode',
    host:'localhost',
    port:5433,
    database:'training_db'
})

module.exports = pool