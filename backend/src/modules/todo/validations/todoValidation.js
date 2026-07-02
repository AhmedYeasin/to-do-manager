import z from "zod";
import { validation } from "../../../shared/constants.js";

export const createTodoSchema = z.object({
    body: z.object({
        title: z.string().trim().min(1, { message: 'Title is required' }).max(validation.title_max_length, `Title cannot exceed ${validation.title_max_length} characters`),
        description: z.string()
            .trim()
            .min(1, 'Description is required')
            .max(validation.description_max_length, `Description cannot exceed ${validation.description_max_length} characters`),
        status: z.enum(valid_todo_status, { message: `Status must be one of the following: ${valid_todo_status.join(', ')}` }).optional()

    })
})