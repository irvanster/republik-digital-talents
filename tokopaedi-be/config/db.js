const {Client} = require('pg')

const db = new Client({
    host: 'localhost',
    port: 5432, //default port
    database: 'tokopaedi',
    user : 'postgres',
    password: '123'
})
db.connect((err)=> {
    if(err) return console.log(err.message)
    console.log('database berhasil connect')
})

module.exports = db