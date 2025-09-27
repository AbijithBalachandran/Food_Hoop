import { Router } from "express";
import { vendorController } from "../controllers/vendor.controller";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const vendor_router = Router();

const vendor_Controller = new vendorController();
const user_Controller  = new userController();

vendor_router.post('/register',vendor_Controller.registerVendor);
vendor_router.post('/otp',user_Controller.otpVerification);
vendor_router.post('/login',user_Controller.loginVerification);

export default vendor_router;

