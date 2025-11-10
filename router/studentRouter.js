const express = require('express');
const router = express.Router();
const studentController = 
require('../controller/studentController');

router.post('/create',studentController.saveStudent);
router.get('/all', studentController.getAllStudents);

module.exports = router;