
import dotenv from "dotenv";
dotenv.config();


if (!process.env.JWT_SECRET_ACCESS_TOKEN || !process.env.JWT_SECRET_REFRESH_TOKEN) {
    throw new Error('JWT secrets keys are not set in envirolement variables');
}

export const accessSecret = process.env.JWT_SECRET_ACCESS_TOKEN;
export const refreshSecret = process.env.JWT_SECRET_REFRESH_TOKEN;
