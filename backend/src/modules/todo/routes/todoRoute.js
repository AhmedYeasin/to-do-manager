import {Router} from 'express'
import { validate } from '../../../middlewares/validateMiddleware.js'

export const todoRoute = Router()

todoRoute.get('/create', validate())