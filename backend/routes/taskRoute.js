import express from "express";
import multer from "multer";
import { addTask, listTasks, removeTask } from "../controllers/taskController.js";

const taskRouter = express.Router();

// multer - images and audio
const imageAndAudioUpload = multer.diskStorage({
  destination: "uploads", 
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const imageAndAudioUploader = multer({ storage: imageAndAudioUpload });

taskRouter.post(
    "/addtask",
    imageAndAudioUploader.fields([
      { name: 'images', maxCount: 6 },
      { name: 'audio', maxCount: 4 },
    ]),
    addTask
  );
taskRouter.get("/listtasks", listTasks);
taskRouter.delete("/removetask", removeTask);

export default taskRouter;