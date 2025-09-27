import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const user_router = Router();

const user_Controller = new userController();

user_router.post('/register',user_Controller.registerUser);
user_router.post('/otp',user_Controller.otpVerification);
user_router.post('/login',user_Controller.loginVerification);
user_router.post('/resendOTP',user_Controller.resendOTP);



export default user_router;

