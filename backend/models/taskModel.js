import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    lesson: { type: mongoose.Schema.Types.ObjectId, ref: 'lesson' },
    type: { type: String, required: true },
    text: { type: String, required: true },
    audio: [String],
    images: [String],
    options: [String],
    answer: { type: String }
});

const taskModel = mongoose.models.task || mongoose.model('task', taskSchema);

export default taskModel;