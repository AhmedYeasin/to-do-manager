import mongoose from "mongoose";
import { validation } from "../../../shared/constants.js";
import { valid_todo_status } from "../../../shared/enums.js";



const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        trim: true,
        minLength: [1, 'title cannot be empty'],
        maxLength: [validation.title_max_length, `title cannot exceed ${validation.title_max_length} characters`],

        validate: {
            validator: v => v != null && v.trim().length > 0,
            message: 'title cannot be blank'
        }
    },

    description: {
        type: String,
        trim: true,
        maxLength: [validation.description_max_length, `description cannot exceed ${validation.description_max_length} characters`],
    },

    status: {
        type: String,
        enum: {
            values: valid_todo_status,
            message: `status must be one of the following: ${valid_todo_status.join(', ')}`
        },
        default: todo_status.active
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
},

    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id
                delete ret._id
            }
        }
    })


todoSchema.index({ user: 1, status: 1, createdAt: -1 })
todoSchema.index({ user: 1, title: 'text', description: 'text' })
export const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema)