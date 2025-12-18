"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const user_controller_1 = require("../controllers/user.controller");
const user_service_1 = require("../services/user.service");
const admin_service_1 = require("../services/admin.service");
const admin_router = (0, express_1.Router)();
const admin_Controller = new admin_controller_1.AdminController(new admin_service_1.AdminService());
const user_Controller = new user_controller_1.userController(new user_service_1.UserService());
admin_router.post('/', admin_Controller.registerAdmin);
admin_router.post('/otp', user_Controller.otpVerification);
admin_router.post('/login', user_Controller.loginVerification);
exports.default = admin_router;
//# sourceMappingURL=admin.router.js.map