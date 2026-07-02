import {Router} from 'express'
import { validate } from '../../../middlewares/validateMiddleware.js'
import { createTodoSchema } from '../validations/todoValidation.js'

export const todoRoute = Router()

todoRoute.get('/create', validate(createTodoSchema))