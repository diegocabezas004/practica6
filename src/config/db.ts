import mongoose from "mongoose";
import 'dotenv/config';

export const connectDB = async() => {
    try{
        const url=process.env.DATABASE_P6
        const connection = await mongoose.connect(url)
        console.log('Mongo conectado');
    }
    catch(err){
        console.log(err);
    }
}