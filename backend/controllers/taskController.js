import fs from 'fs';
import path from 'path';
import lessonModel from '../models/lessonModel.js';
import taskModel from '../models/taskModel.js';

// add task
const addTask = async (req, res) => {
    try {
        // Получаем файлы изображений и аудио
        const image_filenames = req.files['images']?.map((file) => file.filename) || [];
        const audio_filenames = req.files['audio']?.map((file) => file.filename) || [];

        const { lessonId, type, text, options, answer } = req.body;

        // Проверяем, существует ли урок
        const lesson = await lessonModel.findById(lessonId);
        if (!lesson) {
            return res.json({ success: false, message: 'Lesson not found' });
        }

        // Создаем задание и сохраняем его в базе данных
        const task = new taskModel({
            lesson: lessonId,
            type,
            text,
            audio: audio_filenames,
            images: image_filenames,
            options: JSON.parse(options), // Преобразуем строку в массив
            answer,
        });

        await task.save();

        // Добавляем задание в lesson.lessonData
        lesson.lessonData.push(task._id);
        await lesson.save();

        res.json({
            success: true,
            message: 'Task Added to Lesson',
            data: task,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding task' });
    }
};

// list tasks
const listTasks = async (req, res) => {
    try {

        const lesson = await lessonModel.find({}).populate('lessonData');
        if (!lesson) {
            return res.json({ success: false, message: 'Lesson not found' });
        }

        res.json({
            success: true,
            data: lesson,
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: 'Error fetching tasks' });
    }
};

// remove task
const removeTask = async (req, res) => {
    try {
        const { lessonId, taskId } = req.body;

        const lesson = await lessonModel.findById(lessonId);
        if (!lesson) {
            return res.json({ success: false, message: 'Lesson not found' });
        }

        const task = await taskModel.findByIdAndDelete(taskId);
        if (!task) {
            return res.json({ success: false, message: 'Task not found' });
        }

        // deleting uploads
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


        lesson.lessonData = lesson.lessonData.filter(tid => tid.toString() !== taskId);
        await lesson.save();

        res.json({
            success: true,
            message: 'Task Removed',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error removing task' });
    }
};

export {addTask, listTasks, removeTask};