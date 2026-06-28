import { generateAccessToken } from "../../../utils/jwt.js";
import { createAuthRepository } from "../repositories/authRepositoy.js";

export const createAuthService = (userRepository = createAuthRepository()) => {

    const generateTokenPair = async (userId)=>{
        const accessToken = await generateAccessToken()
    }

    return {
        register: async ({ name, email, password }) => {
            const user = await userRepository.create({ name, email, password });
            return {
                user
            };

        }
    }
}