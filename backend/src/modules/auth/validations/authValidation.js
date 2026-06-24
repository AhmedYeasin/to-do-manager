import z, { regex } from "zod";
import { validation } from "../../../shared/constants.js";

const registerSchema = z.object({
    body: z.object({
        name: z.string().trim().min(1, 'Name is required').max(50, 'Name cannot exceed 50 characters'),

        email: z.string().trim().toLowerCase().max(100, 'Email is too long.').pipe(z.email('Please provide a valid email')),

        password: z.string()
        .min(validation.passwordMinLength, `Password must be at least ${validation.passwordMinLength} characters long`)
        .max(120, 'Password cannot exceed 120 characters')
        // .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number')
        .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character')
    })
})