const courseController = require("../controller/courseController");
const express =  require('express');
const router = express.Router();

router.get('/all', courseController.getAllCourses)

module.exports = router;
