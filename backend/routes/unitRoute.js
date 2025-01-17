import express from 'express';
import multer from 'multer';
import { addUnit, listUnits, removeUnit } from '../controllers/unitController.js';

const unitRouter = express.Router();

// multer - images
const imageUpload = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({storage: imageUpload});

unitRouter.post('/addunit', upload.array('image', 1), addUnit);
unitRouter.get('/listunits', listUnits);
unitRouter.delete('/removeunit', removeUnit);

export default unitRouter;