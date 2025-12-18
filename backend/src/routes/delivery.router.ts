import { Router } from "express";
import { DeliveryController } from "../controllers/delivery.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { userController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { DeliveryService } from "../services/delivery.service";

const delivery_router = Router();

const Delivery_Controller = new DeliveryController(new DeliveryService());
const user_Controller = new userController(new UserService());

delivery_router.post('/',Delivery_Controller.registerDelivery);
delivery_router.post('/otp',user_Controller.otpVerification);
delivery_router.post('/login',user_Controller.loginVerification);

export default delivery_router;

