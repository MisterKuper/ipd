import express from 'express';
import { addLesson, listLesson, removeAllLessons, removeLesson } from '../controllers/lessonController.js';

const lessonRouter = express.Router();

lessonRouter.post('/addlesson', addLesson);
lessonRouter.get('/listlessons', listLesson);
lessonRouter.delete('/removelesson', removeLesson);
lessonRouter.delete('/removealllesson', removeAllLessons);

export default lessonRouter;