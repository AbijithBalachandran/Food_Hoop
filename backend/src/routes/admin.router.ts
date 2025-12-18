import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { UserService } from "../services/user.service";
import { AdminService } from "../services/admin.service";

const admin_router = Router();

const admin_Controller = new AdminController(new AdminService());
const user_Controller  = new userController(new UserService());

admin_router.post('/',admin_Controller.registerAdmin);
admin_router.post('/otp',user_Controller.otpVerification);
admin_router.post('/login',user_Controller.loginVerification);

export default admin_router;

