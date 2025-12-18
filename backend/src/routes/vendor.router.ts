import { Router } from "express";
import { vendorController } from "../controllers/vendor.controller";
import { userController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { UserService } from "../services/user.service";
import { VendorService } from "../services/vendor.service";

const vendor_router = Router();

const vendor_Controller = new vendorController(new VendorService);
const user_Controller  = new userController(new UserService());

vendor_router.post('/register',vendor_Controller.registerVendor);
vendor_router.post('/otp',user_Controller.otpVerification);
vendor_router.post('/login',user_Controller.loginVerification);

export default vendor_router;

