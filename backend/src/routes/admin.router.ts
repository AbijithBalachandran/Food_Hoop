import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const admin_router = Router();

const admin_Controller = new AdminController();
const user_Controller  = new userController();

admin_router.post('/',admin_Controller.registerAdmin);
admin_router.post('/otp',user_Controller.otpVerification);
admin_router.post('/login',user_Controller.loginVerification);

export default admin_router;

