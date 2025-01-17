import fs from 'fs';
import path from 'path';
import unitModel from '../models/unitModel.js';
import lessonModel from '../models/lessonModel.js';
import taskModel from '../models/taskModel.js';


// add unit
const addUnit = async (req, res) => {
    try {
        const image_filenames = req.files.map((file) => file.filename); 

        const unit = new unitModel({
            title: req.body.title,
            image: image_filenames,
        });

        await unit.save();
        res.json({ success: true, message: "Unit Added", data: unit });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error" });
    }
};

// all unit list
const listUnits = async (req, res) => {
    try {
        const units = await unitModel.find({});
        res.json({success: true, data: units});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Error'})        
    }
};

// remove unit
const removeUnit = async (req, res) => {
    try {
        const unitId = req.body.unitId || req.body.id;

        if (!unitId) {
            return res.json({ success: false, message: "Unit ID not provided" });
        }

        const unit = await unitModel.findById(unitId);
        if (!unit) {
            return res.json({ success: false, message: "Unit not found" });
        }

        const lessons = await lessonModel.find({ unit: unitId });
        const lessonIds = lessons.map(lesson => lesson._id);

        const tasks = await taskModel.find({ lesson: { $in: lessonIds } });
        
        // deleting uploads
        // unit uploads
        unit.image.forEach(image => {
            const imagePath = path.join('uploads', image);
            fs.unlink(imagePath, (err) => {
                if (err) console.error(`Error deleting unit image ${image}:`, err);
            });
        });

        // tasks uploads
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

        await taskModel.deleteMany({ lesson: { $in: lessonIds } });
        await lessonModel.deleteMany({ unit: unitId });
        await unitModel.findByIdAndDelete(unitId);

        res.json({
            success: true,
            message: "Unit, associated lessons and tasks removed successfully",
        });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error while removing unit" });
    }
};

export {addUnit, listUnits, removeUnit};