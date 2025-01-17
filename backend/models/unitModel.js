import mongoose from "mongoose";

const unitSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: [{type: String, required: true}],
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'lesson' }]
});

const unitModel = mongoose.models.unit || mongoose.model('unit', unitSchema);

export default unitModel;