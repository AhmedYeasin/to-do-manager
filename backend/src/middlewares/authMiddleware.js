import { createAuthRepository } from "../modules/auth/repositories/authRepositoy.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { verifyAccessToken } from "../utils/jwt.js";

const userRepository = createAuthRepository()
export const protect = asyncHandler(async (req, _res, next) => {

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const decoded = verifyAccessToken(token)
    const user = await userRepository.findById(decoded._id)

    next()
})