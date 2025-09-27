"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_controller_1 = require("../controllers/delivery.controller");
const user_controller_1 = require("../controllers/user.controller");
const delivery_router = (0, express_1.Router)();
const Delivery_Controller = new delivery_controller_1.DeliveryController();
const user_Controller = new user_controller_1.userController();
delivery_router.post('/', Delivery_Controller.registerDelivery);
delivery_router.post('/otp', user_Controller.otpVerification);
delivery_router.post('/login', user_Controller.loginVerification);
exports.default = delivery_router;
//# sourceMappingURL=delivery.router.js.map