import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import unitRouter from './routes/unitRoute.js';
import 'dotenv/config'
import lessonRouter from './routes/lessonRoute.js';
import taskRouter from './routes/taskRoute.js';


// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use('/api/user', userRouter);
app.use('/api/unit', unitRouter);
app.use('/api/lesson', lessonRouter);
app.use('/api/task', taskRouter);
app.use('/images', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('API Working');
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});