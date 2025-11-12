 const express = require('express');

const app = express();

const studentRouter = require('./router/studentRouter');
const enrollmentRouter = require('./router/enrollmentRouter');

app.listen(3000, ()=> {
    console.log(`Server started`);
});

app.use(express.json());

app.use('/api/v1/students',studentRouter);
app.use('/api/v1/enrollments',enrollmentRouter);


