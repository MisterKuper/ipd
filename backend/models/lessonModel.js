import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
    unit: { type: mongoose.Schema.Types.ObjectId, ref: 'unit', required: true },
    lessonData: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task' }],
});

const lessonModel = mongoose.models.lesson || mongoose.model('lesson', lessonSchema);

export default lessonModel;