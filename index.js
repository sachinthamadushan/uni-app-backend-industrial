const express = require('express');
const cors =  require('cors');
require('dotenv').config();
const app = express();

const studentRouter = require('./router/studentRouter');
const enrollmentRouter = require('./router/enrollmentRouter');
const courseRouter =  require('./router/courseRouter');
const userRouter = require('./router/userRouter');
const loginToken = require('./middleware/authMiddleware');


app.listen(process.env.PORT, ()=> {
    console.log(`Server started ${process.env.PORT}`);
});

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', loginToken, studentRouter);
app.use('/api/v1/enrollments',loginToken, enrollmentRouter);
app.use('/api/v1/courses',courseRouter);
app.use('/api/v1/users',userRouter);


