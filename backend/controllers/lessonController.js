import fs from 'fs';
import path from 'path';
import unitModel from '../models/unitModel.js';
import lessonModel from '../models/lessonModel.js';
import taskModel from '../models/taskModel.js';
import userModel from '../models/userModel.js';

// add lesson
const addLesson = async (req, res) => {
    try {
        const { unitId } = req.body;

        const unit = await unitModel.findById(unitId);
        if (!unit) {
            return res.json({ success: false, message: 'Unit not found' });
        }

        const lessonPromises = [];
        for (let i = 1; i <= 10; i++) {
            const newLesson = new lessonModel({
                unit: unitId,
                lessonData: [],
            });
            lessonPromises.push(newLesson.save());
        }

        const lessons = await Promise.all(lessonPromises);

        unit.lessons.push(...lessons.map(lesson => lesson._id));
        await unit.save();

        res.json({
            success: true,
            message: '10 Lessons Added To Unit',
            data: lessons, 
        });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error creating lessons' });
    }
};

// all lesson list
const listLesson = async (req, res) => {
    try {
        const units = await unitModel.find({}).populate('lessons'); 
        res.json({ success: true, data: units });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Error' });
    }
};

// remove lesson
const removeLesson = async (req, res) => {
    try {
        const { unitId, lessonId } = req.body;

        if (!unitId || !lessonId) {
            return res.json({ success: false, message: 'Unit ID and Lesson ID are required' });
        }

        const unit = await unitModel.findById(unitId);
        if (!unit) {
            return res.json({ success: false, message: 'Unit not found' });
        }

        const tasks = await taskModel.find({ lesson: lessonId });

        // deleting uploads
        tasks.forEach(task => {
            task.images?.forEach(image => {
                const imagePath = path.join('uploads', image);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error(`Error deleting image ${image}:`, err);
                });
            });

            task.audio?.forEach(audio => {
                const audioPath = path.join('uploads', audio);
                fs.unlink(audioPath, (err) => {
                    if (err) console.error(`Error deleting audio ${audio}:`, err);
                });
            });
        });

        await taskModel.deleteMany({ lesson: lessonId });

        const lesson = await lessonModel.findByIdAndDelete(lessonId);
        if (!lesson) {
            return res.json({ success: false, message: 'Lesson not found' });
        }

        unit.lessons = unit.lessons.filter(id => id.toString() !== lessonId);
        await unit.save();

        res.json({
            success: true,
            message: 'Lesson and associated tasks removed successfully',
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error while removing lesson' });
    }
};

// remove all lessons
const removeAllLessons = async (req, res) => {
    try {
        const { unitId } = req.body;

        if (!unitId) {
            return res.json({ success: false, message: 'Unit ID is required' });
        }

        const unit = await unitModel.findById(unitId);
        if (!unit) {
            return res.json({ success: false, message: 'Unit not found' });
        }

        const lessonIds = unit.lessons;

        if (lessonIds.length === 0) {
            return res.json({
                success: true,
                message: 'No lessons to remove for this unit',
            });
        }

        const tasks = await taskModel.find({ lesson: { $in: lessonIds } });

        // deleting uploads
        tasks.forEach(task => {
            task.images?.forEach(image => {
                const imagePath = path.join('uploads', image);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error(`Error deleting image ${image}:`, err);
                });
            });

            task.audio?.forEach(audio => {
                const audioPath = path.join('uploads', audio);
                fs.unlink(audioPath, (err) => {
                    if (err) console.error(E`rror deleting audio ${audio}:`, err);
                });
            });
        });

        await taskModel.deleteMany({ lesson: { $in: lessonIds } });
        await lessonModel.deleteMany({ _id: { $in: lessonIds } });

        unit.lessons = [];
        await unit.save();

        res.json({
            success: true,
            message: 'All lessons and associated tasks removed from unit',
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error while removing all lessons' });
    }
};

export {addLesson, listLesson, removeLesson, removeAllLessons};