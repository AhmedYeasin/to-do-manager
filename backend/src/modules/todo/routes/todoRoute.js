import {Router} from 'express'
import { validate } from '../../../middlewares/validateMiddleware.js'
import { createTodoSchema } from '../validations/todoValidation.js'
import { createTodo } from '../controllers/todoController.js'

export const todoRoute = Router()

todoRoute.get('/create', validate(createTodoSchema), createTodo)