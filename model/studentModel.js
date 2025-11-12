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
    },
    findById: (studentId) => {
        const sql = `SELECT * FROM students WHERE students.status=1 AND student_id=?`;
        return db.execute(sql,[studentId]);
    },
    findByText:(input) => {
        const searchText = `%${input}%`;
        const sql = `SELECT * FROM students WHERE students.status=1 AND 
                    first_name LIKE ? OR last_name LIKE ? OR email LIKE ?
                    OR dob LIKE ? ` ;
        return db.execute(sql,[searchText,searchText,searchText,searchText]);
    },
    update:(student,studetId) => {
        const {fname,lname,email,dob} = student;
        const sql = `UPDATE students SET first_name=?, last_name=?, email=?,
        dob=? WHERE student_id=?`;
        return db.execute(sql, [fname,lname,email,dob,studetId]);
    },
    delete:(studentId) => {
        const sql = `UPDATE students SET status=0 WHERE student_id=?`;
        return db.execute(sql,[studentId]);
    }

};

module.exports = studentModel;