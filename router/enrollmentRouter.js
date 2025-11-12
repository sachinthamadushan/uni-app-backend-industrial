const enrollmentConroller = require("../controller/enrollmentController");
const express = require('express');
const router = express.Router();

router.post('/create',enrollmentConroller.createEnrollment);
router.get('/all',enrollmentConroller.getAllEnrollmets);
router.get('/find/:eid',enrollmentConroller.getEnrollmentById);
router.put('/update/:eid',enrollmentConroller.updateEnrollment);
module.exports = router;
