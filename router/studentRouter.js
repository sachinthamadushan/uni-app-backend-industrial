const express = require('express');
const router = express.Router();
const studentController = 
require('../controller/studentController');

router.post('/create',studentController.saveStudent);
router.get('/all', studentController.getAllStudents);
router.get('/find/:stuId',studentController.getStudentById);
router.get('/search/:text',studentController.getStudentText);
router.put('/update/:stuId',studentController.updateStudent)
router.delete('/delete/:stuId',studentController.deleteStudent);

module.exports = router;