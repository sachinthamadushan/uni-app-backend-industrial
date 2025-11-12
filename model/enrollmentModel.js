const db = require('../config/databse');

const enrollmentModel = {
    create: (enrollment) => {
        const { stuId, courseId, enrollDate } = enrollment;
        const sql = `INSERT INTO entrollments(student_id, course_id,entroll_date)
        VALUES(?,?,?)`;
        return db.execute(sql, [stuId, courseId, enrollDate]);
    },
    findAll: () => {
        const sql = `SELECT entrollments.entroll_date, CONCAT(students.first_name," ", 
                    students.last_name) AS full_name , courses.course_name, 
                    courses.course_fee FROM entrollments INNER JOIN students ON 
                    entrollments.student_id = students.student_id INNER JOIN courses ON
                    entrollments.course_id = courses.id ORDER BY entroll_date DESC`;
        return db.execute(sql);
    },
    findById: (enrollmentId) => {
        const sql = `SELECT entrollments.id, entrollments.entroll_date, 
                    CONCAT(students.first_name," ", 
                    students.last_name) AS full_name , courses.course_name, 
                    courses.course_fee FROM entrollments INNER JOIN students ON 
                    entrollments.student_id = students.student_id INNER JOIN courses ON
                    entrollments.course_id = courses.id WHERE entrollments.id=?`;
        return db.execute(sql,[enrollmentId]);
    },
    update: (enrollment, enrollmentId) => {
        const { stuId, courseId, enrollDate } = enrollment;
        const sql = `UPDATE entrollments SET student_id=?, course_id=?,
        entroll_date=? WHERE entrollments.id=?`;
        return db.execute(sql, [stuId,courseId,enrollDate,enrollmentId]);
     },
    delete: (enrollmentId) => { },
}

module.exports = enrollmentModel;