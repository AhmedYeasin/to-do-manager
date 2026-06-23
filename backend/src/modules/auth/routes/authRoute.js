import { Router } from "express";
import { register } from "../controllers/authController.js";

export const authRoute = Router();

authRoute.post('/register', register)

