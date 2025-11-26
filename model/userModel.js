const db = require('../config/databse');

const userModel = {
    create:(user) => {
        const sql = `INSERT INTO users(username,password) VALUES(?,?)`;
        return db.execute(sql,[user.username,user.password]);
    }
}

module.exports = userModel;