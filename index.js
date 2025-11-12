const express = require('express');
require('dotenv').config();
const app = express();

const studentRouter = require('./router/studentRouter');
const enrollmentRouter = require('./router/enrollmentRouter');

app.listen(process.env.PORT, ()=> {
    console.log(`Server started ${process.env.PORT}`);
});

app.use(express.json());

app.use('/api/v1/students',studentRouter);
app.use('/api/v1/enrollments',enrollmentRouter);


