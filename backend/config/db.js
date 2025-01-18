import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://{username}:{password}@cluster0.cdsq4.mongodb.net/ipd').then(() => console.log('DB Connected'));
};
