import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
     const connectionDB = await mongoose.connect(process.env.MONGODB_URL)
     console.log('Connected to the database');
    }
    catch (err){
        console.error('Error connecting to the database:', err.message);
        throw err;
    }
}
