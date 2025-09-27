import { Router } from "express";
import { DeliveryController } from "../controllers/delivery.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { userController } from "../controllers/user.controller";

const delivery_router = Router();

const Delivery_Controller = new DeliveryController();
const user_Controller = new userController();

delivery_router.post('/',Delivery_Controller.registerDelivery);
delivery_router.post('/otp',user_Controller.otpVerification);
delivery_router.post('/login',user_Controller.loginVerification);

export default delivery_router;

