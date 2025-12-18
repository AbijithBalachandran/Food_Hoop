"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_controller_1 = require("../controllers/delivery.controller");
const user_controller_1 = require("../controllers/user.controller");
const user_service_1 = require("../services/user.service");
const delivery_service_1 = require("../services/delivery.service");
const delivery_router = (0, express_1.Router)();
const Delivery_Controller = new delivery_controller_1.DeliveryController(new delivery_service_1.DeliveryService());
const user_Controller = new user_controller_1.userController(new user_service_1.UserService());
delivery_router.post('/', Delivery_Controller.registerDelivery);
delivery_router.post('/otp', user_Controller.otpVerification);
delivery_router.post('/login', user_Controller.loginVerification);
exports.default = delivery_router;
//# sourceMappingURL=delivery.router.js.map