import { ApiResponse } from "../../../utils/apiResponse.js";
import { asyncHandler } from "../../../utils/asyncHandler.js";
import { createAuthService } from "../services/authService.js";

const authService = createAuthService();
export const register = asyncHandler(async (req, res) => {
    const { user, accessToken, refreshToken } = await authService.register(req.body);
    
    new ApiResponse(http_status.created, {user, accessToken, refreshToken}, 'user registered successfully').send(res);
})

export const login = asyncHandler(async(req, res)=>{
    new ApiResponse(http_status.ok, {}, 'user logged in successfully').send(res);
})