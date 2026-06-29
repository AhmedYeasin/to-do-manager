import mongoose from "mongoose";
import { validation } from "../../../shared/constants.js";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        trim: true,
        maxLength: [validation.nameMaxLength, `name cannot exceed ${validation.nameMaxLength} characters`]
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minLength: [validation.passwordMinLength, `password must be at least ${validation.passwordMinLength} characters`],
        select: false
    }
},
    {
        timestamps: true,
        versionKey: false
    })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    try {
        this.password = await bcrypt.hash(this.password, validation.bcrypt_salt_rounds)
        next()
    }
    catch (error) {
        next(error)
    }
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)