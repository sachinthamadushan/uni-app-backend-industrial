const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Sachi@123',
    database:'uni_db'
});

module.exports = pool.promise();
