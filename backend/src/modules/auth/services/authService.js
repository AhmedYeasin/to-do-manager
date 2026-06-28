import { generateAccessToken } from "../../../utils/jwt.js";
import { createAuthRepository } from "../repositories/authRepositoy.js";

export const createAuthService = (userRepository = createAuthRepository()) => {

    const generateTokenPair = async (userId) => {
        const accessToken = await generateAccessToken(userId)
        return {
            accessToken
        }
    }

    return {
        register: async ({ name, email, password }) => {
            const user = await userRepository.create({ name, email, password });
            const tokens = await generateTokenPair(user._id);
            return {
                user,
                tokens
            };

        }
    }
}