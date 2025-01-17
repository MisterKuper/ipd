import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kolishenkoroman:58810@cluster0.cdsq4.mongodb.net/ipd').then(() => console.log('DB Connected'));
};