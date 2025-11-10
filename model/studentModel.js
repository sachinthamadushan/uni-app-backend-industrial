const db = require('../config/databse');

const studentModel = {
    create: (student) => {
        const {stuId,fname,
            lname,email,dob,status} = student;
        const sql = `INSERT INTO students
        (student_id,first_name,last_name,email,
        dob,status) VALUES(?,?,?,?,?,?);`;
        return db.execute(sql,[stuId,
            fname,lname,email,dob,status]);
    },
    findAll:() => {
        const sql = `SELECT * FROM students WHERE students.status=1 
        ORDER BY student_id DESC , students.first_name ASC`;
        return db.execute(sql);
    }
};

module.exports = studentModel;