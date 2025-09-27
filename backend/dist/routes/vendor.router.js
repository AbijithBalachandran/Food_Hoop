"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_controller_1 = require("../controllers/vendor.controller");
const user_controller_1 = require("../controllers/user.controller");
const vendor_router = (0, express_1.Router)();
const vendor_Controller = new vendor_controller_1.vendorController();
const user_Controller = new user_controller_1.userController();
vendor_router.post('/register', vendor_Controller.registerVendor);
vendor_router.post('/otp', user_Controller.otpVerification);
vendor_router.post('/login', user_Controller.loginVerification);
exports.default = vendor_router;
//# sourceMappingURL=vendor.router.js.map