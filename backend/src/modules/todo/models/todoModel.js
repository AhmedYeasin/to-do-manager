import mongoose from "mongoose";
import { validation } from "../../../shared/constants.js";



const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true,
        minLength: [1, 'title cannot be empty'],
        maxLength: [validation.title_max_length, `title cannot exceed ${validation.title_max_length} characters`]
    }
})