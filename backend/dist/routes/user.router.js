"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_router = (0, express_1.Router)();
const user_Controller = new user_controller_1.userController();
user_router.post('/register', user_Controller.registerUser);
user_router.post('/otp', user_Controller.otpVerification);
user_router.post('/login', user_Controller.loginVerification);
user_router.post('/resendOTP', user_Controller.resendOTP);
exports.default = user_router;
//# sourceMappingURL=user.router.js.map