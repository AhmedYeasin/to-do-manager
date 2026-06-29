import { asyncHandler } from "../../../utils/asyncHandler.js";
import { createAuthService } from "../services/authService.js";

const authService = createAuthService();
export const register = asyncHandler(async (req, res) => {
    const { user, accessToken } = await authService.register(req.body);
    res.status(http_status.created).json({
        user,
        accessToken
    }, 'user registered successfully'
    )
})