import mongoose from 'mongoose';
import { env } from './env.js';

export const connectDB = async ()=>{
    try{
     const connectionDB = await mongoose.connect(env.MONGODB_URI)
     console.log("mongoDB connected to:",connectionDB.connection.host);
    }
    catch (err){
        console.error('Error connecting to the database:', err.message);
        throw err;
    }
}
