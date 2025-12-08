const databse = require("../config/databse");

const courseModule = {
    findAll: () => {
        const sql = `SELECT * FROM courses WHERE status=1`;
        return databse.execute(sql);
    }
    
}

module.exports = courseModule;