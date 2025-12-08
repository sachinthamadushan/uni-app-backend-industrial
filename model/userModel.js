const db = require('../config/databse');


const userModel = {
    create:(user) => {
        const sql = `INSERT INTO users(username,password) VALUES(?,?)`;
        return db.execute(sql,[user.username,user.password]);
    },
    findByUsername:(username) => {
        const sql = `SELECT *  FROM users WHERE username =?`;
        return db.execute(sql,[username]);
    }
}

module.exports = userModel;